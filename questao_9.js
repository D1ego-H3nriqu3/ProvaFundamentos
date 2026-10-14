function calcPontos(acertos, erros){
    acertos = acertos * 10
    erros = erros * 5
    let pontuacaoTotal = 0
    return pontuacaoTotal = acertos - erros
}

function definirNivel(pontuacaoTotal){
if(pontuacaoTotal >= 100){
    return "Ouro"
}else if(pontuacaoTotal >= 50){
    return "Prata"
}else{
    return "Bronze"
}
}

function gerarResultados(nome, acertos, erros){
    let pontuacaoTotal = calcPontos(acertos, erros)
    let nivel = definirNivel(pontuacaoTotal)
    console.log(`\n${nome}: ${pontuacaoTotal} pontos (${nivel})`)
}

gerarResultados("Ana", 12, 2)
gerarResultados("Bruno", 8, 5)
gerarResultados("Carla", 5, 6)

console.log("\n")