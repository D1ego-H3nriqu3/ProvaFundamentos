import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log("\n=== Sistema de conselho de classe ===\n")

let nota = Number(prompt("Digite a nota do aluno: (0 a 100) "))
    if(isNaN(nota) || nota < 0 || nota > 100){
        console.log("\nNota inválida!\n")
        process.exit()
    }

let frequencia = Number(prompt("Digite a frequência do aluno: ( % ) "))
    if(isNaN(frequencia) || frequencia < 0 || frequencia > 100){
        console.log("\nFrequência inválida!\n")
        process.exit()
    }

if(frequencia < 75){
    console.log("\nReprovado por falta!\n")
}else if(nota >= 90){
    console.log("Conceito A: Aprovado com louvor")
}else if(nota >= 70){
    console.log("Conceito B: Aprovado")
}else if(nota >= 50){
    console.log("Conceito C: Recuperação")
}else{
    console.log("Conceito D: Reprovado")
}