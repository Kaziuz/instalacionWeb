#pragma once

#include "ofMain.h"
#include "ofxFilterLibrary.h"
#include "LineDrawingAlphaFilter.h"
#include "SketchDoGFilter.h"
#include "ofxThreadedImageLoader.h"

class ofApp : public ofBaseApp{
	
 public:
		
  void setup();
  void update();
  void draw();
  void exit();
		
  void keyPressed(int key);
  void keyReleased(int key);
  void mouseMoved(int x, int y );
  void mouseDragged(int x, int y, int button);
  void mousePressed(int x, int y, int button);
  void mouseReleased(int x, int y, int button);
  void mouseEntered(int x, int y);
  void mouseExited(int x, int y);
  void windowResized(int w, int h);
  void dragEvent(ofDragInfo dragInfo);
  void gotMessage(ofMessage msg);		

  
  int 				camWidth;
  int 				camHeight;

  // Captura imagen a archivo
  int 				snapCounter;
  string 			snapString;
  ofImage 			img;
  ofTrueTypeFont		cooper;
  bool 				bSnapshot;
  float 			phase;

  // Reproducción de sonido
  ofSoundPlayer                 sonidoCamara;

  // Filtro sobre la imagen
  private:
  int                         _currentFilter;
  vector<AbstractFilter *>    _filters;
  ofVideoGrabber              _video;

  //
  ofFbo                       _dogFbo;
  LineDrawingAlphaFilter *    _alphaFilter;
  SketchDoGFilter *           _sketchDogFilter;

  //Threaded Image Loader
  ofxThreadedImageLoader loader;
  vector<ofImage> thread_images;
  int total;

  // DirList
  // we will have a dynamic number of images, based on the content of a directory:
  int actualizandoDir; 
  ofDirectory dir;
  vector<ofImage> dir_images;
		
  int currentImage;

};
