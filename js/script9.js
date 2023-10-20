class Pelicula {
    constructor(titulo, poster, sinopsis,trailer) {
      this.titulo = titulo;
      this.poster = poster;
      this.sinopsis = sinopsis;
      this.trailer = trailer;
    }
}

let boton = document.getElementById("Agregar")
let input = document.getElementById("Titulo")
let input2 = document.getElementById("Poster")
let input3 = document.getElementById("Sinopsis")
let input4 = document.getElementById("Trailer")
let div = document.getElementById("divPelis")
let arrayPeli =[]

boton.addEventListener('click', () => 
{
    arrayPeli.push(new Pelicula(input.value, input2.value, input3.value, input4.value))    
    arrayPeli.forEach(Pelicula => {
        div.innerHTML += `
        <h2 class="tituloPelicula">${Pelicula.titulo}</h2>
        <img src="${Pelicula.poster}" class="poster" />
        <div class="sinopsis">${Pelicula.sinopsis}</div>
        <div class="trailer">
          <h3 class="cabezaTrailer">Trailer</h3>
          <iframe src="${Pelicula.trailer}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        `
    });
    input.value=""
    input2.value=""
    input3.value=""
    input4.value=""
})