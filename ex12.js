let estoque = [
  {nome: 'Desinfetante', quantidade: 5, minimo: 10},
  {nome: 'Amaciante', quantidade: 30, minimo: 15},
  {nome: 'Sabão em Pó', quantidade: 25, minimo: 20},
  {nome: 'Cloro', quantidade: 20, minimo: 25},
  {nome: 'Detergente', quantidade: 10, minimo: 2},
]

estoque.forEach(produto => {
  if(produto.quantidade < produto.minimo) {
    produto.quantidade = produto.quantidade * 2
    console.log(`quantidade de ${produto.nome}: ${produto.quantidade}`)
  }
})