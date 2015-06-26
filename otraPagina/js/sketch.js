var img1;
var img2;

function preload() {
  img1 = loadImage("imagenes/0.jpg");
  img2 = loadImage("imagenes/1.jpg");
}

function setup() {
   // El canvas ocupa toda la pantalla
   createCanvas(windowWidth, windowHeight);
}

function draw() {
   
   // primera imagen
   imageMode(CENTER);
   image(img1, 140, 103, 1024/4, 768/4);

   strokeWeight(4);
   stroke(255, 0, 0);
   line(150, 205, 500, 500);
   point(150, 205);

   // añadimos un texto
   noStroke();
   textSize(15);
   textAlign(CENTER);
   textFont("Helvetica");
   text("Aqui vamos a escribir algun texto que tengamos", 500, 520);

}


