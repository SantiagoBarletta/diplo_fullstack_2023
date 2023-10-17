//*************OBJETOS************** */

// const producto1 = {
//   ID: 1,
//   nombre: "Tallarines",
//   precio: 250.5,
// };
/******************Imprimir******* */
// document.write('Id: '+ producto1.ID +'</bR>');
// document.write('Nombre: '+ producto1.nombre +'</bR>');
// document.write('Precio: '+ producto1.precio +'</bR>');

// document.write(producto1["ID"]);
// document.write(producto1["nombre"]);
// document.write(producto1["precio"]);

//********Asignar a variable atributo de un objeto*******/
// let persona = {
//   nombre: "Santiago",
//   apellido: "Barletta",
//   edad: 43,
//   amigos: ["Piny", "Nico", "Fernando"],
// };

// let nombrePersona = persona.nombre;
// let amigos = persona.amigos;

// document.write(nombrePersona);
// document.write(amigos);

/***********Modificar objeto **************/

// persona.edad = persona.edad +1;
// document.write(persona.edad);

// persona.amigos.push("Marcos");
// document.write(amigos);

// persona.ocupacion = "Desarrollador Web";

// document.write(persona.ocupacion);

/****************Actividad*******************/

// let persona1 = {
//     nombre: "Santiago",
//     apellido: "Barletta",
//     edad: 43,
//     tieneMascota: false,
//     serie: "The Boys",
//   };

//   console.log(persona1);

//   persona1.comidaFavorita = ["milanesas", "papas fritas"];

//   console.log(persona1);

//   persona1.comidaFavorita.push("pizza") ;

//   console.log(persona1);

/***************Objetos constructores*******************/

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
// }

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona2);

/*** Declaracion de clase ****/

class ProductoClass {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
  descuento(valor) {
    this.precio -= (valor);
  }
}

// Instanciar objetos con clase

const producto1 = new ProductoClass (1, "Chocolate", 1500);
console.log(producto1);

producto1.descuento(250);

console.log(producto1);

///Recorrer propiedades y valor por propiedades de un objeto //

for (let propiedad in producto1){
    console.log(propiedad);
    console.log(producto1[propiedad]);
}

//Otro ejemplo//

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio *1.21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto2 = new Producto ("arroz", "125");
const producto3 = new Producto ("fideos", "50");

producto2.sumaIva();
producto3.sumaIva();
producto2.vender();

console.log("Producto despues de aplicar sumaIva y vender:");
console.log("Nombre producto2: "+ producto2.nombre);
console.log("Precio producto2: "+ producto2.precio);
console.log("Vendido: "+ producto2.vendido);

console.log("Nombre producto3: "+ producto3.nombre);
console.log("Precio producto3: "+ producto3.precio);
console.log("Vendido: "+ producto3.vendido);