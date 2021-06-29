/* eslint-disable sonarjs/no-one-iteration-loop */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(valorUm, valorDois) {
  if (valorUm === true && valorDois === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(ultimoPrimeiro) {
  let ultimo = ultimoPrimeiro.pop();
  let first = ultimoPrimeiro[0];
  return `${ultimo}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numero) {
  let conferidorMaior = numero[0];
  let contador = 0;
  for (let i = numero.length - 1; i >= 0; i -= 1) {
    if (conferidorMaior < numero[i]) {
      conferidorMaior = numero[i];
    }
  }
  for (let i2 = numero.length - 1; i2 >= 0; i2 -= 1) {
    if (conferidorMaior === numero[i2]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
