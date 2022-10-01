

let jogador = document.getElementById("player");

let xInicial = 0;
let yInicial = 0; 

function moverPlayerPara(x,y){

    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = posY;
    jogador.style.left = posX;

}
setInterval(function () {

    moverPlayerPara(xInicial++, yInicial++);

}, 0.000005);

