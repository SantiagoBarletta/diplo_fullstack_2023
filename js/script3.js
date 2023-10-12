/////////////// BUCLES /////////////////
/////WHILE/////

// let i = 0
// while (i <= 15){
//     document.write("El valor de i es: " + i +"<br>");
//     i = i +1;
// }
////// OTRO WHILE////

// let numero = 100;
// while (numero > 0) {
//   if (numero === 1) {
//     document.write("Sólo queda: " + numero + " paso por caminar<br>");
//   } else {
//     document.write("Sólo quedan: " + numero + " pasos por caminar<br>");
//   }
//   numero = numero - 1;
// }

////// DO WHILE ///////

// let i = 5;
// do { document.write("El valor de i es: " + i +"<br>");
// i = i +1;
// }
// while (i <= 15);

//////////////// FOR //////////////

//for (let i=0; i < 5; i++)
//    document.write(i+"<br>")

/// ejemplo for////
//  for (let turno = 1; turno <= 5; turno++){
//     let nombre =prompt ('Ingrese su nombre');
//     //informa turno asignado
//     alert ("Hola "+nombre+" Tu turno es el número "+turno)
//  }

/////// Propiedad LENGTH del array //////

// let frutas = [
//   "Manzana",
//   "Banana",
//   "Pera",
//   "Uva",
//   "Mandarina",
//   "Naranja",
//   "Kiwi",
// ];

// for (let i = 0; i < frutas.length; i++) {
//     let element = frutas[i];
//     document.write(element + " tiene " + frutas[i].length + " letras <br>");
// }

// document.write("El array <b>frutas</b> tiene " + frutas.length + " elementos <br>");

////////// FOREACH() ///////////////////

let frutas = [
  "Manzana",
  "Banana",
  "Pera",
  "Uva",
  "Mandarina",
  "Naranja",
  "Kiwi",
];

/////// con function //////
// frutas.forEach(function(frutas){
//     document.write("Frutas con forEach es: " + frutas +"<br>");
// })

/////// con funcion flecha //////

// frutas.forEach((frutas) =>
//     document.write("Frutas con forEach es: <b>" + frutas +"</b><br>")
// )

////////// map() ///////////////////

// frutas.map(fruta => {
//     document.write ("Objeto con map(): " +fruta+"<br>");
// })

// ejemplo map() guardado de nuevo array//
const numeros = [1, 2, 3, 4, 5, 6];

// const porDos = numeros.map((x) => x * 2);
// const porCien = numeros.map((x) => x * 100);
// document.write("Por dos: " + porDos + "<br>");
// document.write("Por cien: " + porCien);

//////////// Find /////////////////
// devuelve el primero que cumple la condicion //
const encontrados = numeros.find((elemento) => {
  return elemento > 3;
});
document.write("mayores que 3 con find " + encontrados + "<br>");

//////////// filter /////////////

const filtrados = numeros.filter((elemento) => {
  return elemento > 3;
});
document.write("mayores que 3 con filter " + filtrados + "<br>");

//////////////////// otro filter//////////

let filtro = prompt("Ingrese su busqueda");
const frutasFiltradas = frutas.filter((fruta) => {
  return fruta.includes(filtro);
});
document.write(
  "Frutas que contienen lo del prompt: " + frutasFiltradas + "<br>"
);
