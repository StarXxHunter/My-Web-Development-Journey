
// Nome do aluno - nota 1 - nota2 - média - aprovado/reprovado

var nomes = ["Jonas", "Maria", "Robson"];
var nota1 = [ 5, 9, 7];
var nota2 = [ 7, 8, 6];

function média(n1, n2) {
    return (n1 + n2) / 2
}

function final(média){
    if(média >= 7) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}

for(var i in nomes){
    var not1 = nota1[i];
    var not2 = nota2[i];
    var m = média(nota1[i], nota2[i]);

    console.log(nomes[i] + " - " + not1 + " - " +
        not2 + " - " + m + " - " + final(m));
}

