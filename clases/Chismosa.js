class Chismosa {
    #reputacion;
    #nivelChisme;

    constructor(nombre, reputacion = 5, nivelChisme = 1) {
        if (this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase Chismosa directamente");
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }
    
    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    modificarReputacion(nuevaReputacion) {
        if (nuevaReputacion < 0 || nuevaReputacion > 10) {
            throw new Error("La reputacion solo puede estar entre o y 10")
        }
        this.#reputacion = nuevaReputacion;
    }
    
    modificarNivelChisme(nuevoNchisme) {
        if (nuevoNchisme < 1 || nuevoNchisme > 5) {
            throw new Error("El nivel de chisme solo puede estar entre 1 y 5");
        }
        this.#nivelChisme = nuevoNchisme;
    }

    recolectarInfo() {
        throw new Error("Debes implementar el método recolectarInfo()");
    }

    contarChisme() {
        throw new Error("Debes implementar el método contarChisme()");
    }
}

module.exports = Chismosa;
