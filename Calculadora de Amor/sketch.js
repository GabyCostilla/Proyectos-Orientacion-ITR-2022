let nombre1, nombre2;
let porcentaje = 0;
let corazones = [];

function preload() {
  // carga la imagen del corazón
  corazones[0] = loadImage('https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // crea los campos de entrada y el botón
  nombre1 = createInput().position(50, 50);
  nombre2 = createInput().position(50, 80);
  const boton = createButton("Calcular").position(50, 110);
  boton.mousePressed(calcular);
}

function draw() {
  // dibuja el fondo
  background(252, 207, 224);
  
  // dibuja los corazones
  for (let i = 0; i < corazones.length; i++) {
    image(corazones[i], random(width), random(height), 50, 50);
  }

  // dibuja el texto del porcentaje de compatibilidad
  textSize(24);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(2);
  text(`El porcentaje de compatibilidad entre ${nombre1.value()} y ${nombre2.value()} es:`, width / 2, height / 2 - 50);
  textSize(64);
  text(`${porcentaje}%`, width / 2, height / 2 + 50);
}

function calcular() {
  // verifica si los nombres ingresados son "zai" y "gaby"
  if ((nombre1.value().toLowerCase() === "zai" && nombre2.value().toLowerCase() === "gaby") || (nombre1.value().toLowerCase() === "gaby" && nombre2.value().toLowerCase() === "zai")) {
    porcentaje = 100;
    alert("Zaiby Canon <3 !!")
  } else {
    // calcula el porcentaje aleatoriamente
    porcentaje = Math.floor(random(101));
  }
  
  // agrega un corazón al arreglo cada vez que se presiona el botón
  corazones.push(corazones[0]);
}
