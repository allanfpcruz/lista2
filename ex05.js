const prompt = require('prompt-sync')()

let alunos = [
  {
    nome: 'Aluno1',
    notas: [10, 8, 7],
  },
  {
    nome: 'Aluno2',
    notas: [9, 6, 5],
  },
  {
    nome: 'Aluno3',
    notas: [3, 4, 7],
  },
  {
    nome: 'Aluno4',
    notas: [10, 9, 10],
  }
]

for(let aluno of alunos) {
  let soma = 0
  for(let nota of aluno.notas) {
    soma += nota
  }
  let media = parseInt(soma / aluno.notas.length)
  console.log(`${aluno.nome} teve uma média de ${media} = ${media >= 6 ? 'APROVADO' : 'REPROVADO'}`)
}