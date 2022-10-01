
let adultos = document.getElementById("adultos");
let crianças = document.getElementById("crianças");
let duracao = document.getElementById("duração");
let resultado = document.getElementById("resultado");


function calcular() {
    console.log("Calculando...")

    let a = adultos.value;
    let c = crianças.value;
    let d = duracao.value;


    let totalDeCarne = carnePP(d) * a + (carnePP(d) / 2 * c);
    let totalDeCerveja = cervejaPP(d) * a;
    let totalDeRefri = refriPP(d) * a + (refriPP(d) / 2 * c);
    

    resultado.innerHTML = `<p>${totalDeCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p>${totalDeCerveja}ml de cerveja</p>`
    resultado.innerHTML += `<p>${totalDeRefri}ml de refrigerante</p>`

}

function carnePP(d){

    if(d >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(d){

    if(d >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function refriPP(d){

    if(d >= 6){
        return 1500;
    } else{
        return 1000;
    }
}