function setup() {
    createCanvas(windowWidth,windowHeight);
    noLoop();
  }
  
  function draw() {
    background(240);
    randomSeed(100); // Fija la semilla aleatoria para obtener los mismos resultados cada vez que se ejecuta el programa
  
    // Colores disponibles para el zaiby canon
    let colors = [
      color(255, 0, 0), // Rojo
      color(0, 255, 0), // Verde
      color(203, 50, 52), // Rojo puro
      color(246, 7, 10), // Rojo saturado
      color(0, 255, 127), // Verde life
      color(64, 255, 159) // Verde ligero
    ];
  
    let tileSize = 50; // Tamaño de las baldosas
    let numTilesX = width / tileSize;
    let numTilesY = height / tileSize;
  
    for (let i = 0; i < numTilesX; i++) {
      for (let j = 0; j < numTilesY; j++) {
        let x = i * tileSize;
        let y = j * tileSize;
  
        let col = random(colors); // Color aleatorio del zaiby canon
        let angle = random(0, TWO_PI); // Ángulo de rotación aleatorio
  
        push();
        translate(x + tileSize / 2, y + tileSize / 2);
        rotate(angle);
        rectMode(CENTER);
        fill(col);
        stroke(0);
        strokeWeight(2);
        rect(0, 0, tileSize, tileSize);
        pop();
      }
    }
  }
  