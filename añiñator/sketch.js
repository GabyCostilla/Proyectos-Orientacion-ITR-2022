let characters = [
    {
      name: 'Gabnzana en compota',
      questions: [
        '¿Es una persona?',
        '¿Es cantante?',
        '¿tiene 15 años?',
        '¿es freestyler?',
        '¿participa en una banda?'
      ],
      answers: [true, true, true, true, true]
    },
    {
      name: 'pahante',
      questions: [
        '¿Es otaku?',
        '¿sabe mucho de musica?',
        '¿es vivisimo?',
        '¿tiene un corte casco?',
        '¿su mochila es re pateable?'
      ],
      answers: [true, true, true, true, true]
    },
    {
      name: 'pocho',
      questions: [
        '¿Es god?',
        '¿Es alto?',
        '¿le encanta el brawl?',
        '¿tiene 15 años?',
        '¿es un arquero god?'
      ],
      answers: [true, true, true, true, true]
    }
  ];
  
  let currentQuestion = 0;
  let currentCharacter = null;
  
  function setup() {
   
    createCanvas(windowWidth, windowHeight);
    
    textSize(24);
    textAlign(CENTER, CENTER);
    currentCharacter = characters[Math.floor(random(characters.length))];
    askQuestion();
  }
  
  function askQuestion() {
    background(220);
    var question = currentCharacter.questions[currentQuestion];
    text(question, width/2, height/3);
    text('Sí [S] | No [N]', width/2, height/2);
  }
  
  function keyPressed() {
    if (keyCode === 83) { // S key
      currentQuestion++;
      if (currentQuestion >= currentCharacter.questions.length) {
        alert('¡El personaje era ' + currentCharacter.name + '!');
        currentQuestion = 0;
        currentCharacter = characters[Math.floor(random(characters.length))];
      } else {
        askQuestion();
      }
    } else if (keyCode === 78) { // N key
      currentQuestion++;
      if (currentQuestion >= currentCharacter.questions.length) {
        alert('¡Juego terminado! El personaje era ' + currentCharacter.name + '.');
        currentQuestion = 0;
        currentCharacter = characters[Math.floor(random(characters.length))];
      } else {
        askQuestion();
      }
    }
  }
  function draw() {
    fill(0);
    textAlign(LEFT, TOP);
    textSize(18);
    text('Adivina el personaje famoso', 20, 20);
    textSize(14);
    text('Preguntas restantes: ' + (currentCharacter.questions.length - currentQuestion), 20, 50);
    textAlign(CENTER, BOTTOM);
    textSize(12);
    text('Presiona S para Sí y N para No', width/2, height-10);
  }