function simularTiradas() {
    for (juego = 1; juego <= 10; juego++) {
      const valAleatorio = getRandomIntInclusive(5, 10) * 37 + getRandomIntInclusive(0, 36);
      const numRuleta = valAleatorio % 37;
      console.log("Nro de juego:", juego);
      console.log("Valor Aleatorio Generado:", valAleatorio);
      console.log("Nro que cayó en la ruleta:", numRuleta);
      console.log();
    }
  }
  
  function getRandomIntInclusive(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  simularTiradas();