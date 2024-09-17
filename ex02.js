const prompt = require('prompt-sync')()

let livro = {
  titulo: 'As Crônicas de Gelo e Fogo',
  autor: 'George R R Martin',
  ano: 2002,
  genero: 'Fantasia'
}

//verifica se há propriedade 'editora' em 'livro'
if ('editora' in livro) {
  console.log(livro.editora)
} else {
  livro.editora = prompt('Digite o nome da editora: ').toString()
  for (let key in livro) {
    console.log(`${key}: ${livro[key]}`)
  }
}