

function setup() {
   // El canvas ocupa toda la pantalla
  var plano1 = createCanvas(640, 480);
  plano1.parent("contenedor1");
}

function draw() {
   
   // primera imagen

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




