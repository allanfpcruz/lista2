let clientes = [
  {nome: 'Cliente1', idade: 24},
  {nome: 'Cliente2', idade: 34},
  {nome: 'Cliente3', idade: 36},
  {nome: 'Cliente4', idade: 19},
  {nome: 'Cliente5', idade: 25},
  {nome: 'Cliente6', idade: 65},
]

for (let cliente of clientes) {
  if(cliente.idade >= 30) {
    console.log(`${cliente.nome} tem mais de 30 anos`)
  }
}