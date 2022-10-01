

// var alunos = new Array("Francisco", "Bruna", "Telma", "Romeu");

// console.log(alunos[2]);
// console.log(alunos.length);

// var aluno1 = "Francisco";
// var aluno2 = "Bruna";
// var aluno3 = "Telma";
// var aluno4 = "Romeu";
// var aluno5 = "Saulo";

var aluno = ["Francisco", "Bruna", "Telma",
    "Romeu", "Saulo", "Leonardo"]

// console.log(aluno[0]);
// console.log(aluno[1]);
// console.log(aluno[2]);
// console.log(aluno[3]);
// console.log(aluno[4]);

// for (var i = 0; i < aluno.length; i++) {
//     console.log(aluno[i])
// }

// for (var i in aluno) {
//     console.log(aluno[i])
// }

for (var aluno of aluno) {
    console.log(aluno)
}
