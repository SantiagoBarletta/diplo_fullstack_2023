//////////////////////// DOM //////////////////////

console.log(document.querySelector('h1'));

console.log(document.querySelector('#texto'));

let texto = document.querySelector('#texto')
console.log(texto.innerText);

//////// Eventos ///////

function saludar(){
    let nombre = prompt("Ingrese su nombre");
    alert("HOLAAAA! " + nombre);
}