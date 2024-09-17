let empresa = {
  nome: 'Juninho Produções Ltda',
  departamentos: [
    {
      nome: 'Administrativo',
      funcionarios: ['Elisangela', 'Joelma', 'Anderson']
    },
    {
      nome: 'Financeiro',
      funcionarios: ['Claudia', 'Roberta', 'Joel', 'Gael']
    },
    {
      nome: 'Produção',
      funcionarios: ['Pedro', 'Lucas', 'Roberta']
    },
    {
      nome: 'Marketing',
      funcionarios: ['Gleice', 'Renan', 'Fernanda']
    }
  ]
}

for (departamento of empresa.departamentos) {
  for (funcionario of departamento.funcionarios) {
    console.log(`${funcionario}: ${departamento.nome}`)
  }
}