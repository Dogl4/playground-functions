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
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 > gato2) {
    return 'cat2';
  }
  if (gato2 > gato1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numero) {
  for (let i = numero.length - 1; i >= 0; i -= 1) {
    if (numero[i] % 3 === 0 && numero[i] % 5 === 0) {
      numero[i] = 'fizzBuzz';
    } else if (numero[i] % 3 === 0) {
      numero[i] = 'fizz';
    } else if (numero[i] % 5 === 0) {
      numero[i] = 'buzz';
    } else {
      numero[i] = 'bug!';
    }
  }
  return numero;
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
