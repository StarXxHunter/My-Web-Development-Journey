

function calmedia (n1, n2) {
    return (this.notas[0] * 3 + this.notas[1]) / 4;
}


// var aluno = {
//     nome: "Jaime",
//     notas: [4, 7],

//     media: function (n1, n2){
//         return (n1 * 3 + n2) / 4;
//     }
// }

// var aluno = {
//     nome: "Jaime",
//     notas: [4, 7],

//     media: function () {
//         return (this.notas[0] + this.notas[1]) / 2;
//     }
    
// }



var aluno = {
    nome: "Jaime",
    notas: [4, 7],

    media: calmedia

}



var aluno2 = {
    nome: "Jão",
    notas: [5, 9],

    media: calmedia

}



// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

// console.log(aluno2.nome);
// console.log(aluno.media(aluno2.notas[0], aluno2.notas[1]))

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());