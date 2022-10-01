let tela = document.getElementById("tela")

let ctx = tela.getContext("2d");

// let img1 = document.getElementById("imagem1")

let img1 = new Image();
img1.src = "./JOAO FRANGO.jpg"

img1.onload = desenharImg;

function desenharImg(){

ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2)

}