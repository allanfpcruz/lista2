let carrinho = {
  itens: [
    {produto: 'calça', quantidade: 5, precoUni: 120},
    {produto: 'camisa', quantidade: 10, precoUni: 60},
    {produto: 'shorts', quantidade: 4, precoUni: 70},
    {produto: 'blusa', quantidade: 3, precoUni: 150},
    {produto: 'jaqueta', quantidade: 2, precoUni: 300},
  ]
}

let total = 0
carrinho.itens.forEach(item => {
  total += item.precoUni * item.quantidade
})

console.log('O preço total dos itens no carrinho é de: ' + total)