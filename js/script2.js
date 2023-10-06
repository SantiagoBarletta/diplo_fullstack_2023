// Clase 11 Intro a JS
////////////////// CONDICIONALES ////////////////////

let numero = 1;

if (numero > 3) {
  console.log("El número es mayor a 3");
} else if (numero === 2) {
  console.log("El número es 2");
} else {
  console.log("El número es menor de 3");
}

///////// Operador condicional ternario

let edad = 19;

let esMayorEdad = edad > 18 ? true : false;

console.log("¿Es mayor de edad?" + esMayorEdad);

// otro ejemplo

let nombre = "Santiago";
let edad1 = 43;

edad1 >= 18
  ? console.log(nombre + " es mayor de edad")
  : console.log(nombre + " es menor de edad");

////////////////// ARRAYS ////////////////////

let peliculas = [
  "Viernes 13",
  "Pesadilla",
  "El regreso de los muertos vivos",
  "The Thing",
  "Terminator 2",
];
console.log(peliculas.length);
console.log(peliculas[0]);

////////////////////// Consigna//////////////////////

// let nombrePrompt = prompt ("Ingrese su nombre");
// let edadPrompt = prompt ("Ingrese su edad");
// let salida;
// edadPrompt >= 18  ? salida = (nombrePrompt + " puedes comprar cerveza")
//   : salida = (nombrePrompt + " no puedes comprar cerveza");

// alert (salida);

/////////////////////////SWITCH/////////////////////

let fruta;
switch (fruta) {
  case "manzana":
    color = "rojo";
    break;
  case "kiwi":
    color = "verde";
    break;
  case "naranja":
    color = "naranja";
    break;
  default:
    color = "blanco";
    break;
}
console.log(color);

////////////////////// Consigna//////////////////////

// let diaGet = (new Date().getDay());
// let fechaGet = (new Date().getDate());
// switch (diaGet) {
//   case 0:
//     dia = "Domingo";
//     break;
//   case 1:
//     dia = "Lunes";
//     break;
//   case 2:
//     dia = "Martes";
//     break;
//     case 3:
//     dia = "Miércoles";
//     break;
//     case 4:
//     dia = "Jueves";
//     break;
//     case 5:
//     dia = "Viernes";
//     break;
//     default:
//     dia = "Sábado";
//     break;
// }
// console.log("hoy es "+ dia + ' ' + fechaGet);

//////////////////CONSIGNA /////////////////////////

let numeroPrompt = parseInt (prompt ("Ingrese un número"));
if (numeroPrompt == 10 ){
    respuesta = ('ingresó el número 10');
}
else if (numeroPrompt > 10){
    respuesta = ('ingresó un número mayor a 10');
 }
else{
    respuesta = ('ingresó un número menor a 10');
}
document.write(respuesta);