const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')
const body = document.body
let coratual = 'black'

btligar.addEventListener('click',ligar)
btdesligar.addEventListener('click',desligar)

function ligar(){
    lampada.src = 'images/lampada-acesa.png'
    if (coratual === "black"){
        body.style.background = "white";
        coratual = "white";
    }
}

function desligar() {
    lampada.src = 'images/lampada-apagada.png'
    if (coratual === "white"){
        body.style.background = "black";
        coratual = "black";
    }
}