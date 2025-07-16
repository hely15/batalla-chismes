const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
    recolectarInfo(){
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");
        this.modificarNivelChisme(Math.random() * 2);
    }

    contarChisme() {
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");
        this.modificarReputacion(1);
        this.modificarNivelChisme(1);
    }
}

module.exports = CompaneraCuriosa;