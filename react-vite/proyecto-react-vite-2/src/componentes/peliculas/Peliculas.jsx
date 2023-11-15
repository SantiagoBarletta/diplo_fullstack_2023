import PropTypes from "prop-types";
import imagenes from '../imagenes';



function Pelicula(props){
    console.log('Ruta de la imagen:', imagenes[props.imagen]);

    return(
        <article className="pelicula">
        <h2 className="tituloPelicula"> {props.nombre}</h2>
        <img src={imagenes[props.imagen]} alt={props.nombre} className="poster"/>
        <b> Año:</b> {props.anio} <br/>
        <b> Director:</b> {props.director}
        <p className="sinopsis"> {props.sinopsis}</p>
        
        
        </article>
    )
}

Pelicula.propTypes = {
    nombre: PropTypes.string.isRequired,
    anio: PropTypes.number,
    sinopsis: PropTypes.string,
    director: PropTypes.string,
    imagen: PropTypes.string,

};


export default Pelicula;