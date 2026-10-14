
let nSemana = 0
let cofrinho = 0

console.log("\n=== Nosso cofrinho ===\n")

while(cofrinho < 500){
    nSemana++
    cofrinho += 75
    console.log(`Semana ${nSemana}: R$ ${cofrinho}`)
}

console.log(`\nMeta atingida em ${nSemana} semanas!`)

if(cofrinho > 500){
    let diferenca = cofrinho - 500
    console.log(`Sobrou R$ ${diferenca} além da meta!\n`)
}