// Clase 10 Intro a JS
// Muestra en consola
//console.log ("Hola Mundo desde archico externo");

/////////////// Variables
// Version 5
var nom ="Santiago";
console.log (nom);

// Version 6
let nombre ="Santiago";
let edad = 43;
const APELLIDO = "Barletta";
let tieneMascota = true;

console.log(nombre);
console.log(APELLIDO);
console.log(edad);
console.log(tieneMascota);

console.log('Me llamo', nombre, APELLIDO, 'tengo', edad, 'años');

/////////////// Operaciones con Variables

let numeroA = 12;
let numeroB = 3;

let resultadoSuma = numeroA + numeroB;
console.log(resultadoSuma);

///////////////// prompt

let nombrePrompt = prompt ("Ingrese su nombre");
let apellidoPrompt = prompt ("Ingrese su apellido");
let salida = 'Hola ' + nombrePrompt + ' ' + apellidoPrompt;
alert (salida);

//let numeroPrompt = parseInt (prompt ("Ingrese un número para dividir por 2"));
//let DIVISOR = 2;
//let resultadoDivisor = numeroPrompt / DIVISOR;
//alert ('Resultado: ' + resultadoDivisor);

