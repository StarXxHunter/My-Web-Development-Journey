// Maneiras de escrever um objeto:
//1
// var a = {
//     nome: "dfdsf",
//     sobrenome: "wefasff",
// }
//2
function obj (nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome}
}
//3
// function obj (n, s) {

//     this.nome = n;
//     this.sobrenome = s;

// }
console.log(obj("Francisco", "Bley Ruthes"))