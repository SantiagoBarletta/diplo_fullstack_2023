//Funcion mostrar y ocultar con una clase

function alternarVisibilidad() {
  const elementos = document.getElementsByClassName("claseEjemplo");
  for (const elemento of elementos) {
    if ((elemento.style.display === 'none')) {
      elemento.style.display = 'block';
    } else {
      elemento.style.display = 'none';
    }
  }
}

//Funcion mostrar y ocultar con un ID

function mostrarOcultarElemento() {
  document.getElementById("miElemento").classList.toggle("oculto");
}

document
  .getElementById("mostrarOcultarBtn")
  .addEventListener("click", alternarVisibilidad);

  // Oculta y muestra por Id
document
  .getElementById("mostrarOcultarBtn")
  .addEventListener("click", mostrarOcultarElemento);
