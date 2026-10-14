export default function verificarEstoque(qtd){
    if(qtd === 0){
        return "Esgotado!"
    }else if(qtd < 5){
        return "Estoque baixo!"
    }else{
        return "OK"
    }
}