const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');

const chismosas = [
  new TiaVecina("Tía Rosa"),
  new CompaneraCuriosa("Sandra la curiosa"),
  new EstudianteEspia("María la espía")
];

function simularBatalla(rondas = 2) {
  chismosas.forEach((chismosa) => {
    console.log(`--- ${chismosa.nombre} ---`);
    for (let i = 0; i < rondas; i++) {
      chismosa.recolectarInfo();
      chismosa.contarChisme();
    }

    const reputacion = chismosa.getReputacion();
    const nivelChisme = chismosa.getNivelChisme();

    console.log(`Reputación: ${reputacion.toFixed(1)}`);
    console.log(`Nivel Chisme: ${nivelChisme.toFixed(1)}`);
  });

  const ganadora = chismosas.reduce((prev, curr) =>
    curr.getNivelChisme() > prev.getNivelChisme() ? curr : prev
  );
  console.log(`La reina del chisme es: ${ganadora.nombre}!`);
}

simularBatalla(2);
