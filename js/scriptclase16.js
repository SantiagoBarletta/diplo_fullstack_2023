// /** Formulario **/

// // Definicion de la clase producto

// class Producto {
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// // Declaracion del Array
// const productos = [];
// //Obtenemos Formulario
// let miFormulario = document.getElementById("registroProducto");

// // Manejar el evento "submit" del formulario
// miFormulario.onsubmit = (e) => {e.preventDefault();

// // Obtener los inputs del formulario
// const inputs = miFormulario.getElementsByTagName("input");

// // Creamos objeto Producto con los valores de los inputs
// const producto = new Producto(0, inputs[0].value, inputs[1].value);

// // Añadir el producto al array producto
// productos.push(producto);

// console.log(productos);
// }

/** Formulario Personajes**/

document.addEventListener("DOMContentLoaded", function () {
  // Declaracion del Array
  const personajes = ["Tarman", "Jason", "Thing"];

  // Funcion para mostrar lista de personajes en el DOM
  const renderPersonajeList = () => {
    const personajeList = document.getElementById("personajes-list");
    personajeList.innerHTML = "";

    personajes.forEach((personaje, index) => {
      const listItem = document.createElement("article");
      listItem.className = "personajeJS";
      // Agregar nombre

      const personajeName = document.createElement("div");
      personajeName.className = "tituloPelicula";
      personajeName.textContent = personaje;
      listItem.appendChild(personajeName);

      // Crea una imagen para el personaje
      const personajeImage = document.createElement("img");
      personajeImage.src = `../images/${personaje
        .toLowerCase()
        .replace(" ", "-")}.jpg`;
      personajeImage.alt = personaje;
      personajeImage.className = "personajeImg";
      listItem.appendChild(personajeImage);

      const deleteButton = document.createElement("span");
      deleteButton.className = "delete-personaje";
      deleteButton.dataset.index = index; // Almacena el índice en un atributo personalizado
      deleteButton.textContent = "Eliminar";
      listItem.appendChild(deleteButton);

      //Agrega elemento de lista al DOM
      personajeList.appendChild(listItem);
    });
    updatePersonajeCount(); //Actualiza el contador de Personajes
  };

  // Funcion para agregar personaje a la lista

  const agregarPersonaje = () => {
    const personajeInput = document.getElementById("personajeInput");
    const nuevoPersonaje = personajeInput.value;

    if (nuevoPersonaje) {
      personajes.push(nuevoPersonaje);
      personajeInput.value = "";
      renderPersonajeList();
    }
  };
  // funcion para elimina un personaje de la lista
  const deletePersonaje = (index) => {
    personajes.splice(index, 1); // Elimina el personaje del array
    renderPersonajeList(); // Vuelve a mostrar la lista actualizada
  };

  // Agrega controlador de eventos al boton agregar
  const addButton = document.getElementById("agregar-personaje");
  addButton.addEventListener("click", agregarPersonaje);

  // Evento para el campo entrada (permitir agregar precionando ENTER)
  const personajeInput = document.getElementById("personajeInput");
  personajeInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      agregarPersonaje();
    }
  });

  // // Evento para la lista de personajes (permite eliminar)
   const personajeList = document.getElementById("personajes-list");
   personajeList.addEventListener("click", function(event) {
     if (event.target.classList.contains("delete-personaje")) {
       const index = event.target.getAttribute("data-index"); //Obtiene el indice almacenado en atributo
       deletePersonaje(index);
     }
   });


  // Funcion para actualizar el contador

  const updatePersonajeCount = () => {
    const personajeCount = document.getElementById("contador-personajes");
    personajeCount.textContent = `Número de Personajes: ${personajes.length}`;
  };
  renderPersonajeList();
});
