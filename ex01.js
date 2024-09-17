let carro = {
  marca: 'Wolksvagen',
  modelo: 'Gol',
  ano: 2012,
  cor: 'Vermelho'
}

for (let key in carro) {
  console.log(`${key} : ${carro[key]}`)
}