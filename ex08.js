let biblioteca = [
  { titulo: 'Fogo e Sangue', autor: 'Jorge R. R. Martin', ano: 2013, genero: 'Ficção' },
  { titulo: 'Harry Potter: Prisioneiro de Azkaban', autor: 'J. K. Rolling', ano: 1999, genero: 'Ficção' },
  { titulo: 'Como Treinar o Seu Dragão', autor: 'Jorginho', ano: 1985, genero: 'Ação' },
  { titulo: 'O Senhor dos Anéis', autor: 'Jorginho', ano: 1978, genero: 'Ficção' },
  { titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', ano: 1836, genero: 'Romance' }
]

let livros = []

for (let livro of biblioteca) {
  livros.push(livro.titulo)
}

console.log(livros)