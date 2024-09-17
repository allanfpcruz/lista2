let pessoas = [
  {
    nome: 'João',
    idade: 15,
    profissao: 'Estudante'
  },
  {
    nome: 'Maria',
    idade: 18,
    profissao: 'Estagiario(a)'
  },
  {
    nome: 'José',
    idade: 24,
    profissao: 'Desenvolvedor'
  }
]

for (const pessoa of pessoas) {
  let { nome, ...restante } = pessoa
  console.log(nome.toUpperCase())
  for(let key in restante) {
    console.log(`${key}: ${restante[key]}`)
  }
}
//aqui usei desestruturação de objetos para separar o nome do restante