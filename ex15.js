const prompt = require('prompt-sync')()

let saldo = 1500

let transacoes = []

let resp = ''

while (resp !== 'N') {
  let tipo = String(prompt('Digite o tipo de transação (saque ou depósito): '))
  let valor = Number(prompt('Digite o valor: '))
  //cria um novo objeto e coloca no array
  let novaTransacao = {tipo, valor}
  transacoes.push(novaTransacao)
  resp = String(prompt('Deseja continuar? (S/N) '))
  console.log(resp)
}



for (let transacao of transacoes) {
  if(transacao.tipo === 'deposito') {
    saldo += transacao.valor
  } else if (transacao.tipo === 'saque') {
    saldo -= transacao.valor
  }
}

console.log('SALDO: ' + saldo)