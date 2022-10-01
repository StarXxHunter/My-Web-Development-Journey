let tela = document.getElementById("tela");


let ctx = tela.getContext("2d")

// ctx.moveTo(0,0);
// ctx.lineTo(250,250)
// ctx.lineTo(500,0)
// ctx.strokeStyle = "FF0000"
// ctx.lineWidth = 6
// ctx.stroke()


ctx.rect(10, 10, 100, 200)


ctx.fillStyle = "green";


// ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 100, 200);

ctx.strokeStyle = "red";

// ctx.strokeRect(10, 10, 100, 200);

ctx.fill()
ctx.stroke()

ctx.clearRect(50,50,40,40)
