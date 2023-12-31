class Mascota {
  constructor(nombre, raza, index) {
    this.nombre = nombre;
    this.raza = raza;
    this.adoptada = false;
    this.index =index;
  }

  // Metodo para marcar mascota como adoptada
  adoptar() {
    this.adoptada = true;
  }
}

//Funcion para agregar una nueva mascota a la lista
function agregarMascota() {
  const inputMascota = document.getElementById("nombreMascota");
  const input2Mascota = document.getElementById("razaMascota");
  const nombreMascota = inputMascota.value.trim();
  const razaMascota = input2Mascota.value.trim();
  const index = "";

  if (nombreMascota !== "") {
    const nuevaMascota = new Mascota(nombreMascota, razaMascota);

    // Crear un elemento de la lista y aplicar estilo segun estado
    const elementoLista = document.createElement("li");
    elementoLista.textContent =
      "Nombre de la Mascota: " +
      nuevaMascota.nombre +
      " | Raza: " +
      nuevaMascota.raza;

// Boton eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = 'Eliminar';
    elementoLista.appendChild(botonEliminar);

      if (nuevaMascota.adoptada) {
      elementoLista.classList.add("adoptada");
    }

    //agregar un evento de click para marcar/adoptar la mascota
    elementoLista.addEventListener("click", function () {
      nuevaMascota.adoptar();
      elementoLista.classList.add("adoptada");
    });

    // Agregar la mascota
    const listaMascotas = document.getElementById("listaMascotas");
    listaMascotas.appendChild(elementoLista);

    //Limpia campo entrada
    inputMascota.value = "";
    input2Mascota.value = "";

    // Evento para eliminar mascota

 botonEliminar.addEventListener ("click", function(){
  listaMascotas.removeChild(elementoLista);
})

  }
}

// Obtener boton para agregar mascotas
const botonAgregarMascota = document.getElementById("agregarMascota");

// agrega un evento para que haga click
botonAgregarMascota.addEventListener("click", agregarMascota);

// Evento para el campo entrada (permitir agregar precionando ENTER)
const input2Mascota = document.getElementById("razaMascota");
input2Mascota.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    agregarMascota();
  }
});
