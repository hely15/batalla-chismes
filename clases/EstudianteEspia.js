const Chismosa = require('./Chismosa');

class EStudianteEspia extends Chismosa {
    recolectarInfo() {
        console.log("Lee chats ajenos desde el ultimo puesto del salón");
        this.modificarNivelChisme(Math.random() * 3 + 1);
    }

    contarChisme(){
        console.log("Filtra el chisme por estados en WhatsApp");
        const reputacionExtra = Math.floor(Math.random() * 4);
        this.modificarNivelChisme(Math.floor(Math.random() * 3) + 1);
        this.modificarReputacion(reputacionExtra);
    }
}

module.exports = EstudianteEspia;