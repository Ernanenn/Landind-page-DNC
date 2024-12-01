let setaEsquerda = window.document.getElementById("seta-esquerda")
let card1 = window.document.getElementById("card1")
let card2 = window.document.getElementById("card2")
let card3 = window.document.getElementById("card3")
let setaDireita = window.document.getElementById("seta-direita")

function rodarCarrosselParaDireita() {
    card1.style = "display:none"
    card3.style = "display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none; margin-top: 50px"
}

function rodarCarrosselParaEsquerda() {
    card3.style = "display:none"
    card1.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}