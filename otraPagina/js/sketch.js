function setup() {
  // uncomment this line to make the canvas the full size of the window
   // El canvas ocupa toda la pantalla
   createCanvas(windowWidth, windowHeight);
}

function draw() {
  // draw stuff here
   if(mouseIsPressed)
   {
   	fill(0);
   }else{
   	fill(255);
   }
   ellipse(mouseX, mouseY, 50, 50);
}