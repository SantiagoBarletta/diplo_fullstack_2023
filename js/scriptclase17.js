class Mascota {
    constructor(nombre){
        this.nombre = nombre;
        this.adoptada = false;
    }

// Metodo para marcar mascota como adoptada
adoptar(){
    this.adoptada = true;
}
}
//Funcion para agregar una nueva mascota a la lista

function  agregarMascota() {
    const inputMascota = document.getElementById("nuevaMascotas");
    const nombreMascota = inputMascota.value.trim()  ;
    
    if (nombreMascota !== ""){
        const nuevaMascota = new Mascota(nombreMascota);
        // Crear un elemento de la lista y aplicar estilo segun estado
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre;

        if (nuevaMascota.adoptada){
            elementoLista.classList.add("adoptada");
        }

        //agregar un evento de click para marcar/adoptar la mascota

        elementoLista.addEventListener("click", function(){
            nuevaMascota.adoptar();
            elementoLista.classList.add("adoptada");
        })

        // Agregar la mascota

        const listaMascotas = document.getElementById("listaMascotas");
        listaMascotas.appendChild(elementoLista);
        //Limpia campo entrada
        inputMascota.value ="";
    }

}

// Obtener boton para agregar mascotas

    const botonAgregarMascota = document.getElementById("agregarMascota");
    // agrega un evento para que haga click
    botonAgregarMascota.addEventListener("click", agregarMascota);