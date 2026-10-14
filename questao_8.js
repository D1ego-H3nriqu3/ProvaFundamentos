import PromptSync from "prompt-sync"
const prompt = PromptSync()

let heroi = {
    nome: "Aria",
    vida: 100,
    nivel: 1,
    inventario: ["espada"],

    addItens: function(){
        for(let i = 1; i <= 2; i++){
            let item = (prompt("Item encontrado: ")).trim()
            if(item === ""){
                console.log("\nItem inválido!\n")
                return this.addItens()
            }else{
                this.inventario.push(item)
            }
        }
    }
}

console.log(`\n${heroi.nome} | Vida: ${heroi.vida} | Nível: ${heroi.nivel}\n`)

heroi.addItens()

heroi.vida -= 35
heroi.nivel += 1
heroi.classe = "Guerreira"

console.log(`\n${heroi.nome} | Vida: ${heroi.vida} | Nível: ${heroi.nivel}\nItens: ${heroi.inventario.length}\n`)

delete heroi.nivel

console.log(heroi)