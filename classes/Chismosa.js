class Chismosa {
  #reputacion;
  #nivelChisme;

  constructor(nombre, reputacion = 5, nivelChisme = 0) {
    if (this.constructor === Chismosa) {
      throw new Error("No puedes instanciar una clase abstracta.");
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

  modificarReputacion(valor) {
    this.#reputacion = Math.min(10, Math.max(0, this.#reputacion + valor));
  }

  modificarNivelChisme(valor) {
    this.#nivelChisme = Math.min(10, Math.max(0, this.#nivelChisme + valor));
  }

  recolectarInfo() {
    throw new Error("Debes implementar el método recolectarInfo()");
  }

  contarChisme() {
    throw new Error("Debes implementar el método contarChisme()");
  }
}

module.exports = Chismosa;
