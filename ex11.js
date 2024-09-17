let pedidos = [
  {produto: 'Desinfetante', cliente: 'José', quantidade: 5, valor: 10},
  {produto: 'Amaciante', cliente: 'Maria', quantidade: 2, valor: 15},
  {produto: 'Sabão em Pó', cliente: 'José', quantidade: 7, valor: 20},
  {produto: 'Cloro', cliente: 'Joana', quantidade: 2, valor: 25},
  {produto: 'Detergente', cliente: 'Joana', quantidade: 10, valor: 2},
]

let levante = []
pedidos.forEach(pedido => {
  let tem = false
  for (cliente of levante) {
    //se o cliente já estiver na lista de levante
    if (cliente.nome === pedido.cliente) {
      tem = true
      cliente.pedidos++
      //define o novo valor de compras desse cliente
      cliente.valor += Number(pedido.quantidade * pedido.valor.toFixed(2))
    }
  }
  //se o cliente não estives na lista
  if(!tem) {
    //define um novo objeto, contendo o nome do cliente, o número de pedidos e o valor total de pedidos
    let novoCliente = {nome: pedido.cliente, pedidos: 1, valor: Number(pedido.quantidade * pedido.valor.toFixed(2))}
    levante.push(novoCliente)
  }
})
console.log(levante)