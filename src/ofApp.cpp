#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	
  camWidth 		= 480;	// try to grab at this size. 
  camHeight 		= 360;

  // CARGAR FILTROS -> Al final solo se usa el que escojan
  // Filtro sobre la imagen
  ofDisableArbTex();
  ofEnableSmoothing();
  ofEnableAlphaBlending();
  _video.initGrabber(camWidth, camHeight);
  _currentFilter = 0;

  // CrosshatchFilter(_video.getWidth(), _video.getHeight(), 0.013, 0.003) // AGregar una ui para modificar los parámetros
  _filters.push_back(new CrosshatchFilter(_video.getWidth(), _video.getHeight(), 0.026, 0.002));
  _filters.push_back(new KuwaharaFilter(8));
  //_filters.push_back(new SobelEdgeDetectionFilter(_video.getWidth(), _video.getHeight()));
  _filters.push_back(new BilateralFilter(_video.getWidth(), _video.getHeight()));
  //_filters.push_back(new SketchFilter(_video.getWidth(), _video.getHeight()));


  FilterChain * charcoal = new FilterChain(_video.getWidth(), _video.getHeight(), "Charcoal");
  charcoal->addFilter(new BilateralFilter(_video.getWidth(), _video.getHeight(), 4, 4));
  charcoal->addFilter(new GaussianBlurFilter(_video.getWidth(), _video.getHeight(), 2.f ));
  charcoal->addFilter(new DoGFilter(_video.getWidth(), _video.getHeight(), 12, 1.2, 8, 0.99, 4));
  _filters.push_back(charcoal);


  _filters.push_back(new HalftoneFilter(_video.getWidth(), _video.getHeight(), 0.0004));
  _filters.push_back(new SmoothToonFilter(_video.getWidth(), _video.getHeight()));
  _filters.push_back(new ErosionFilter(_video.getWidth(), _video.getHeight()));
  _filters.push_back(new PixelateFilter(_video.getWidth(), _video.getHeight(), 0.0175));
    
  //DoGFilter
  _alphaFilter = new LineDrawingAlphaFilter();
  _sketchDogFilter = new SketchDoGFilter(_video.getWidth(), _video.getHeight(),  11, 1.7, 8.5, 0.973, 4);
  _sketchDogFilter->setBlack(56);
  _sketchDogFilter->setSigma(1.36);
  _sketchDogFilter->setSigma3(0.01);
  _sketchDogFilter->setTau(0.897);
  _sketchDogFilter->setHalfWidth(4);
  _sketchDogFilter->setSketchiness(ofVec2f(5.3, 0.0));
  _filters.push_back(_sketchDogFilter);
  _dogFbo.allocate(_video.getWidth(), _video.getHeight());


  FilterChain * hatchedSketchFilter = new FilterChain(_video.getWidth(), _video.getHeight(), "Hatched Sketch DoG Filter");
  hatchedSketchFilter -> addFilter(_sketchDogFilter);
  hatchedSketchFilter -> addFilter(new PoissonBlendFilter("img/canvas_texture.jpg", _video.getWidth(), _video.getHeight(), 2.0));
  hatchedSketchFilter -> addFilter(new HalftoneFilter(_video.getWidth(), _video.getHeight(), 0.0004));
  _filters.push_back(hatchedSketchFilter);

  FilterChain * watercolorChain = new FilterChain(_video.getWidth(), _video.getHeight(), "Monet");
  watercolorChain->addFilter(new KuwaharaFilter(9));
  watercolorChain->addFilter(new LookupFilter(_video.getWidth(), _video.getHeight(), "img/lookup_miss_etikate.png"));
  watercolorChain->addFilter(new BilateralFilter(_video.getWidth(), _video.getHeight()));
  watercolorChain->addFilter(new PoissonBlendFilter("img/canvas_texture.jpg", _video.getWidth(), _video.getHeight(), 2.0));
  watercolorChain->addFilter(new VignetteFilter());
  _filters.push_back(watercolorChain);
  // FIN CARGAR FILTROS -> Encapsular todo esto
  
  // Captura imagen a archivo
  snapCounter = 0;
  bSnapshot = false;
  cooper.load("cooperBlack.ttf", 50);
  phase = 0;

  // Sonido captura
  sonidoCamara.load("sounds/sonidoCamara.wav");

  // //ofDirList
  // dir.listDir("images/");
  // dir.sort(); // in linux the file system doesn't return file lists ordered in alphabetical order

  // //allocate the vector to have as many ofImages as files
  // if( dir.size() ){
  //   dir_images.assign(dir.size(), ofImage());
  // }

  // //allocate the vector to have as many ofImages as files
  // if( dir.size() ){
  //   dir_images.assign(dir.size(), ofImage());
  // }

  // // you can now iterate through the files and load them into the ofImage vector
  // for(int i = 0; i < (int)dir.size(); i++){
  //   dir_images[i].load(dir.getPath(i));
  // }

  // currentImage = 0;
    
  // total = 24;
  // thread_images.resize(total*2);
  // for(int i = 0; i < total; ++i) {
  //   loader.loadFromDisk(dir_images[i*2], "of" + ofToString(i) + ".png");
  // }    

}


//--------------------------------------------------------------
void ofApp::update(){

  // Revisar cada 30 segundos el directorio para cargar las imágenes

  // if ((ofGetElapsedTimeMillis() % 31000) > 30000 && (ofGetElapsedTimeMillis() % 31000) < 30050){
  //   ofLog() << "Pasaron 30 segs" << endl << "Actualizando dir " << actualizandoDir++;
  //   //ofDirList
  //   dir.listDir("images/");
  //   dir.sort(); // in linux the file system doesn't return file lists ordered in alphabetical order

  //   //allocate the vector to have as many ofImages as files
  //   if( dir.size() ){
  //     dir_images.assign(dir.size(), ofImage());
  //   }

  //   // you can now iterate through the files and load them into the ofImage vector
  //   for(int i = 0; i < (int)dir.size(); i++){
  //     dir_images[i].load(dir.getPath(i));
  //   }

  //   currentImage = 0;
    
  //   total = 24;
  //   thread_images.resize(total*2);
  //   for(int i = 0; i < total; ++i) {
  //     loader.loadFromDisk(dir_images[i*2], "of" + ofToString(i) + ".png");
  //   }
  // }    
  
  _video.update();
}

//-------------------------------------------------------------
void ofApp::exit(){
  // loader.stopThread();
}

//--------------------------------------------------------------
void ofApp::draw(){


  ofBackground(255);
  ofPushMatrix();
  ofSetColor(255);
  ofScale(-1, 1);
  ofTranslate(-_video.getWidth(), 0);
  ofEnableAlphaBlending();
  
  _dogFbo.begin();

  _filters[_currentFilter]->begin();
  _video.draw(0,0);
  _filters[_currentFilter]->end();


  //ofClear(255);
  // if (_mode==DOG_MODE_ANIME) _dogFilter->begin();
  // else _sketchDogFilter->begin();
  // _video.draw(0, 0);
  // if (_mode==DOG_MODE_ANIME) _dogFilter->end();
  // else _sketchDogFilter->end();
  
  _dogFbo.end();

  _alphaFilter->begin();
  _dogFbo.draw(0, 0);
  _alphaFilter->end();


  ofPopMatrix();
  ofSetColor(0);
  ofDrawBitmapString( _filters[_currentFilter]->getName() + " Filter\n(press SPACE to change filters)", ofPoint(40, camHeight + 20));
    
  
    // Captura de imagen a archivo
  if (bSnapshot == true){
    // grab a rectangle at 200,200, width and height of 300,180
    img.grabScreen(0,0,camWidth,camHeight);

    string fileName = "imagenes/"+ofGetTimestampString()+".png";
    img.save(fileName);
    snapString = "saved " + fileName;
    snapCounter++;
    bSnapshot = false;
  }

  ofSetColor(255);

  // for(int i = 0; i < 5; ++i) {
  //   int x = 1;//(i%8);
  //   int y = 1;//(i/8);
  //   dir_images[i].draw(x*128,y*128, 128,128);
  // }	
	
  // // draw the FPS
  // ofDrawRectangle(0,ofGetHeight()-20,30,20);

  // ofSetColor(0);
  // ofDrawBitmapString(ofToString(ofGetFrameRate(),0),5,ofGetHeight()-5);

}


//--------------------------------------------------------------
void ofApp::keyPressed  (int key){ 
	
  // in fullscreen mode, on a pc at least, the 
  // first time video settings the come up
  // they come up *under* the fullscreen window
  // use alt-tab to navigate to the settings
  // window. we are working on a fix for this...
	
  // Video settings no longer works in 10.7
  // You'll need to compile with the 10.6 SDK for this
  // For Xcode 4.4 and greater, see this forum post on instructions on installing the SDK
  // http://forum.openframeworks.cc/index.php?topic=10343        

  // tomar foto
  if (key == 'x'){
    bSnapshot = true;
    sonidoCamara.play();
  }

  if (key==' ') {
     _currentFilter ++;
     if (_currentFilter>=_filters.size()) _currentFilter = 0;
  }
  else if (key=='f') ofToggleFullscreen();
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){ 
	
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
	
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
