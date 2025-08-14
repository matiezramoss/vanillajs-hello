let who = [
  "El perro ",
  "Mi abuela ",
  "Mi vecino ",
  "Mi luz ",
  "Mi computadora ",
  "Mi papá ",
  "Mi hermano ",
  "Mi abuelo ",
  "Mi marido ",
  "Mi hijo ",
  "Mi hija ",
  "Mi sobrino ",
  "La impresora ",
  "Mi tío ",
  "Mi tía ",
  "Mi vecina ",
  "Mi pez ",
  "Mi gato ",
  "Mi cuñado ",
  "Él ",
];

let action = [
  "comió ",
  "apagó ",
  "rompió ",
  "olvidó ",
  "perdió ",
  "confundió ",
  "escondió ",
  "llevó ",
  "ayudó ",
  "atrasó ",
  "durmió ",
  "se enfermó ",
  "falleció ",
  "se cortó ",
  "se quedó ",
  "oró ",
  "lloró ",
  "viajó ",
  "vomitó ",
  "gritó ",
];

let what = [
  "mi tarea ",
  "mi cuaderno ",
  "el internet ",
  "mi celular ",
  "el cargador ",
  "la computadora ",
  "el documento ",
  "el informe ",
  "mi mochila ",
  "las llaves ",
  "mi uniforme ",
  "el proyecto ",
  "la impresora ",
  "mi lapicera ",
  "el archivo ",
  "el trabajo final ",
];

let when = [
  "antes de la clase",
  "cuando dormía",
  "mientras hacía ejercicio",
  "durante el almuerzo",
  "cuando estaba en misa",
  "de camino a la escuela",
  "justo antes de enviarlo",
  "cuando iba a imprimirlo",
  "esta mañana",
  "anoche",
  "mientras me bañaba",
  "cuando se fue la luz",
  "durante una videollamada",
  "cuando sonó la alarma",
  "al salir de casa",
];


let randomWho = who[Math.floor(Math.random() * who.length)];

let randomAction = action[Math.floor(Math.random() * action.length)];

let randomWhat = what[Math.floor(Math.random() * what.length)];

let randomWhen = when[Math.floor(Math.random() * when.length)];

window.onload = function () {
  const frase = document.getElementById('excuse');
  frase.innerHTML = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
};
