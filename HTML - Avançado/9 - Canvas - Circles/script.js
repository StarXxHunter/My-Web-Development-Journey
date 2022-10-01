let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


let x = 250;
let y = 250;
let raio = 100;

let inicio = 0; //radianos
let fim = 2 * Math.PI; //radianos

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "pink";

ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()