// /******interval()*****/
// /* se ejecuta cada 1 segundo */

 function intervalFuncion() {
   console.log("este mensaje se mostrará cada segundo");
 }

 const intervalID = setInterval(intervalFuncion, 1000);

// // para detener el intervalo despues de un tiempo//

 setTimeout(() => {
   clearInterval(intervalID);
   console.log("El intervalo se ha detenido");
 }, 5000);

// // //Definimos una funcion que se ejecuta despues de 3 segudos

 function timeoutFunction() {
   console.log("este mensaje se mostrará despues de 3 segundos");
 }

 const timeoutId = setTimeout(timeoutFunction, 6000);

// // Ejemplo Interval

function mostrarHora() {
    let reloj = document.getElementById("reloj");
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();
  }
 
  let cronometro = setInterval(mostrarHora, 1000);

///////// manipulacion del dom ej. select dinamico //////////////

const categorias = [];
let entrada = prompt("Ingresar categoria \n (Escribir 'ESC' para salir)");
// si la entrada es distinta a 'ESC' en cada repeticion cargar una categoria

while (entrada.toUpperCase() != "ESC") {
  // Incluir categoria en array
  categorias.push(entrada.toLocaleUpperCase());
  // Solicitamos una nueva categoria
  entrada = prompt("Ingresar categoria \n (Escribir 'ESC' para salir)")
}

// Obtenemos el elemento

let miselect = document.getElementById("select");

// Recorrer el array

for (const categoria of categorias){
    miselect.innerHTML += "<option>" + categoria + "</option>"
}

