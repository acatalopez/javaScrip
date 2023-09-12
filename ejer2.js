function simMovCir() {
    const posIn = Math.floor(Math.random() * 360);
    const vueltas = Math.floor(Math.random() * 6) + 5;
    const angFin = (posIn + vueltas * 360) % 360;
  
    console.log("Posición o ángulo Inicial G.A.:", posIn);
    console.log("Valor Aleatorio Generado en Grados:", vueltas * 360);
    console.log("Ángulo Final:", angFin);
  }
  
  simMovCir();