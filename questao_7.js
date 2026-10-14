let temperaturas = [22, 25, 19, 30, 28, 17, 27]

let soma = 0
let diasAcima = 0

console.log("\n")

for(let i = 0; i < temperaturas.length; i ++){
    console.log(`Dia ${i + 1}: ${temperaturas[i]}°C`)
    soma += temperaturas[i]
    if(temperaturas[i] > 25){
        diasAcima++
    }
}

let media = soma / temperaturas.length

console.log(`\nSoma das temperaturtas: ${soma}`)
console.log(`Média das temperaturas: ${media}°C`)
console.log(`Dias acima de 25°C: ${diasAcima}\n`)