let produto = {
  producao: 220,
  custo: 130,
  valor: 350,
  estoque: 250
}

let novoProduto = {}
for (let key in produto) {
  if(produto[key] >= 250) {
    novoProduto[key] = produto[key]
  }
}

console.log(Object.entries(novoProduto))
//entries: retorna as propriedades e seus valores em forma de vetor