const Chismosa = require('./Chismosa');

class TiaVecina extends Chismosa {
  recolectarInfo() {
  console.log("Aprovecha la reunión del barrio para escuchar discretamente");
  const incremento = Math.floor(Math.random() * 3) + 1; // entre 1 y 3
  this.modificarNivelChisme(incremento);
  }


  contarChisme() {
    console.log("Difunde el chisme mientras ofrece café");
    this.modificarNivelChisme(1);
    this.modificarReputacion(1);
  }
}

module.exports = TiaVecina;
