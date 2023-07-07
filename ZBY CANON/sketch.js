let buttonYes, buttonNo;
let x, y;
let titleDiv; // variable para almacenar el elemento div del título

function setup() {
  createCanvas(windowWidth, windowHeight); //ajustar canvas al tamaño de la ventana del navegador
  background("#82E0AA");

  // crear título
  titleDiv = createDiv('ZAIBY CANON?');
  titleDiv.position(20, 20); // ajustar posición del título

  // crear botones
  buttonYes = createButton('si');
  buttonYes.position(50, 50);
  buttonYes.mousePressed(showMessage); // llamar a la función showMessage cuando se presiona el botón "si"

  buttonNo = createButton('no');
  buttonNo.position(250, 50);
  buttonNo.mousePressed(moveButton);

  // obtener posicion inicial del boton "no"
  x = buttonNo.x;
  y = buttonNo.y;
}

function draw() {
  // no es necesario dibujar nada en este sketch
}

function showMessage() {
  alert("ZAIBY CANON <3"); // mostrar alerta cuando se presiona el botón "si"
}

function moveButton() {
  // mover boton "no" a una posicion aleatoria
  let newX = random(width - buttonNo.width);
  let newY = random(height - buttonNo.height);
  buttonNo.position(newX, newY);

  // si el boton "no" se superpone con el boton "si", moverlo
  if (dist(buttonNo.x, buttonNo.y, buttonYes.x, buttonYes.y) < 50) {
    moveButton();
  }
}
