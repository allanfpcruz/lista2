let listaDeProdutos = [
  {nome: 'Desinfetante', preco: 10.5, desconto: 10},
  {nome: 'Amaciante', preco: 15.6, desconto: 15},
  {nome: 'Sabão em Pó', preco: 20.5, desconto: 20},
]

for (let produto of listaDeProdutos) {
  let novoPreco = (((100 - produto.desconto) / 100) * produto.preco).toFixed(2)
  produto.preco = novoPreco
  console.log('PROMOÇÃO' + produto.nome + 'por apenas R$' + produto.preco)
}