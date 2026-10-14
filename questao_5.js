let fila = ["Ana", "Bruno", "Carla"]

console.log(`\nFila inicial: ${fila.join(", ")}`)

fila.push("Diego")

console.log(fila)

fila.unshift("Eliza")

console.log(fila)

fila.splice(fila.indexOf("Bruno"), 1)

console.log(fila)

console.log(`\nCarla está na fila? ${fila.includes("Carla")}`)

console.log(`Próximos dois: ${fila.slice(0,2).join(", ")}`)

fila.pop()

console.log(fila)

console.log(`Pessoas na fila: ${fila.length}`)

console.log(`Última pessoa: ${fila[fila.length - 1]}`)
