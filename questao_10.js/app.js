import produtos from "./produtos.js";
import calcValor from "./calcValor.js";
import verificarEstoque from "./verificarEstoque.js";

console.log("\n=== ESTOQUE DA PAPELARIA ===\n")

for(let i = 0; i < produtos.length; i++){
    let valor = calcValor(produtos[i].preco, produtos[i].quantidade)
    let estoque = verificarEstoque(produtos[i].quantidade)
    console.log(`${produtos[i].nome}: ${produtos[i].quantidade} Un. | R$ ${valor} | ${estoque}`)
}

console.log("\n")