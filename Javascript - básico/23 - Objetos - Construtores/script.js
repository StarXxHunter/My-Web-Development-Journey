

// function criarAluno(nome, n1, n2){

//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2, 
//         media: function() {
//             return (this.nota1 + this.nota2) / 2;
//     }
// }
// }


// var aluno = criarAluno("Timão", 3, 1.75);

// console.log(aluno);
// console.log(aluno.media());


// var turma = [
//     criarAluno("queriamos", 5, 2),
//     criarAluno("Dani", 2 ,4)
// ]

// var aluno = turma;


// for (var aluno of turma) {

//     console.log(aluno.nome + " - " + aluno.media());

// }


// function calcmedia() {
//     return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//     {nome: "Igor",
//      nota1: 8,
//      nota2: 5,
//      media: calcmedia}
//      ,
//     {nome: "Jaspion",
//      nota1: 9,
//      nota2: 4,
//      media: calcmedia}
// ]

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media())

function aluno(nome, n1, n2) {
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,

    this.media = function (){
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno("Lorena", 4, 10);

console.log(a);