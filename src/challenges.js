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
  for (let i = 0; i < numero.length; i += 1) {
    if (conferidorMaior < numero[i]) {
      conferidorMaior = numero[i];
    }
  }
  for (let i2 = 0; i2 < numero.length; i2 += 1) {
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
function encode(string) {
  let laranja = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      laranja += '1';
    } else if (string[i] === 'e') {
      laranja += '2';
    } else if (string[i] === 'i') {
      laranja += '3';
    } else if (string[i] === 'o') {
      laranja += '4';
    } else if (string[i] === 'u') {
      laranja += '5';
    } else {
      laranja += string[i];
    }
  }
  return laranja;
}

function decode(laranja) {
  let string = '';
  for (let i = 0; i < laranja.length; i += 1) {
    if (laranja[i] === '1') {
      string += 'a';
    } else if (laranja[i] === '2') {
      string += 'e';
    } else if (laranja[i] === '3') {
      string += 'i';
    } else if (laranja[i] === '4') {
      string += 'o';
    } else if (laranja[i] === '5') {
      string += 'u';
    } else {
      string += laranja[i];
    }
  }
  return string;
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
