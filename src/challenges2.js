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
      name: name
    });
  }
  return listaLaranja;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
