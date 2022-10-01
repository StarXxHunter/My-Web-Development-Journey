// var nota1 = 9;
// var nota2 = 8;

// var media = (nota1 + nota2) / 2;

// if(media >= 7){

//     console.log("Você passou com média " + media)
// }
// else{
//     console.log("Sua nota " + media + " é insuficiente")
// }

var nota1 = 7;
var nota2 = 7;

var media = (nota1 + nota2) / 2;

var conceito = "";

if(media >= 8){

    conceito = "Ótimo";

}
else if(media >= 7){
    conceito = "Bom";
}
else{
    conceito = "Ruim";
}

console.log(media);
console.log(conceito);

switch(conceito){
    case "ótimo":
        console.log("Parabéns!")
        break;
    case "Bom":
        console.log("Parabéns! Quase perfeito.")
        break;
    case "Ruim":
        console.log("Estude mais!")
        break;
    default:
        console.log("ERRO")
}