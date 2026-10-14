const nomeDigitado = "   ana BEATRIZ   "

let nomeCorrigido = nomeDigitado.trim().toLowerCase()

console.log(`\nNome: ${nomeCorrigido.toUpperCase()}
Caracteres: ${nomeCorrigido.length}
Inicial: ${nomeCorrigido.slice(0, 1).toUpperCase()}
Email: ${nomeCorrigido.replace(" ", ".")}@lionsdev.com
Bem-Vinda à LionsDev, ${nomeCorrigido.toUpperCase()}! Seu login é ${nomeCorrigido.replace(" ", ".")}@lionsdev.com`)
