// let image = document.getElementById("like");

// image.addEventListener("click", function () {
    
    // image.src = "https://imgs.jusbr.com/publications/images/fdedaa25cc2376c1150e808620da008e";
    // let lastimage = image.getAttribute("src");
    // image.setAttribute("src", "https://imgs.jusbr.com/publications/images/fdedaa25cc2376c1150e808620da008e")

    // console.log(lastimage);
    
    // image.setAttribute("cor","vermelho")
// })

let lista = document.getElementById("lista");


lista.dataset.num = 9;


// let id = lista.dataset.id;
let id = lista.getAttribute("data-id")
console.log(id)

// let num = parseInt(lista.getAttribute("data-num"));
let num = parseInt(lista.dataset.num);
console.log(lista.dataset.num)

let conteudo = "";

for( let i = 0; i <= num; i++){

    conteudo += "<li>" + i + "</li>";

}

lista.innerHTML = conteudo
    