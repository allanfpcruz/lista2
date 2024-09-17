let funcionarios = [
  {nome: 'José', cargo: 'Segurança', salario: '3000'},
  {nome: 'Maria', cargo: 'Secretária', salario: '3500'},
  {nome: 'Antonio', cargo: 'Mecanico', salario: '2500'},
  {nome: 'Joana', cargo: 'Faxineira', salario: '2000'}, 
]

for (let funcionario of funcionarios) {
  if (funcionario.salario >= 3000) {
    console.log(`${funcionario.nome} recebe R$${funcionario.salario} como ${funcionario.cargo}`)
  }
}