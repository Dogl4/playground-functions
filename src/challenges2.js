// Desafio 10
function techList(array, name) {
  let listaLaranja = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let recebe of array) {
    listaLaranja.push({
      tech: recebe,
      name,
    });
  }
  return listaLaranja;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  function contadorTres(array) {
    for (let key of array) {
      for (let i = 0; i < array.length; i += 1) {
        if (key === array[i]) {
          for (let i2 = i + 1; i2 < array.length; i2 += 1) {
            if (key === array[i2]) {
              for (let i3 = i2 + 1; i3 < array.length; i3 += 1) {
                if (key === array[i3]) {
                  return 3;
                }
              }
            }
          }
        }
      }
    }
    return 0;
  }

  for (let key of array) {
    if (array[key] < 0 || array[key] > 9 || contadorTres(array) === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA > lineB + lineC ||
    lineA < Math.abs(lineB - lineC) ||
    lineB > lineA + lineC ||
    lineB < Math.abs(lineC - lineA) ||
    lineC > lineA + lineB ||
    lineC < Math.abs(lineA - lineB)
  ) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(cerveja) {
  cerveja = cerveja.match(/\d+/g);
  let agua = 0;
  for (let key of cerveja) {
    agua += parseInt(key);
  }
  if (agua > 1) {
    return `${agua} copos de água`;
  }
  return `${agua} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
