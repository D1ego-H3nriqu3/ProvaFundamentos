let lanche = 12
let sucoAbacaxi = 6
let pagamento = 50

console.log("\nEu comprei dois lanches de R$ 12 e um suco de abacaxi de R$ 6, paguei tudo com R$ 50: ")

let total = (lanche * 2) + 6
let troco = pagamento - total

console.log(`No fim o meu total gasto foi R$ ${total}, já meu troco foi R$ ${troco}`)

if (total >= 30 && troco > 0){ //Essa parte seria o equivalente a representação da variável booleana do exercício, que também é definida pela verificação lógica
    console.log("E ainda ganhei um brinde!\n")
}