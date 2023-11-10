import propTypes from "prop-types";


function Casa (props){
    return(
        <section className="seccion">
            <h2>{props.nombre}</h2>
            <p>{props.valores}</p>
            <p>{props.animal}</p>
            <p>{props.director}</p>
            <p>{props.ubicacion}</p>
            <p>{props.imagen}</p>
        </section>
    )
}

// Casa.propTypes = {
//     nombre: propTypes.string,
//     valores: propTypes.string,
//     animal: propTypes.string,
//     director: propTypes.string,
//     ubicacion: propTypes.string,
//     imagen: propTypes.string,
// }


export default Casa;