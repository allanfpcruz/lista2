let vendas = [
  {nome: 'Produto1', quantidade: 15, valor: 1500},
  {nome: 'Produto2', quantidade: 40, valor: 500},
  {nome: 'Produto3', quantidade: 5, valor: 1000},
  {nome: 'Produto4', quantidade: 10, valor: 3000},
]

let lucroTot = 0
for (let produto of vendas) {
  let lucro = produto.quantidade * produto.valor
  console.log(`${produto.nome} vendeu R$${lucro} esse ano`)
  lucroTot += lucro
}
console.log(`O lucro total foi de R$${lucroTot}`)