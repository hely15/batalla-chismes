const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
  recolectarInfo() {
    console.log("Lee chats ajenos desde el último puesto del salón");
    this.modificarNivelChisme(Math.random() * 3 + 1);
  }

contarChisme() {
  console.log("Filtra el chisme por estados en WhatsApp");
  const reputacionExtra = Math.floor(Math.random() * 4); // número entre 0 y 3
  this.modificarNivelChisme(Math.floor(Math.random() * 3) + 1); // entre 1 y 3
  this.modificarReputacion(reputacionExtra);
}

}

module.exports = EstudianteEspia;
