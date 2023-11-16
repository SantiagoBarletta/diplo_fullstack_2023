import Pocion from "./Pocion";



const ListaDePociones = ({ pociones, completarPocion, eliminarPocion }) =>{
    return(
        <div className="contenedor-listado">
            {pociones.map((pocion) =>(
                <Pocion 
                    key={pocion.id}
                    pocion={pocion}
                    completarPocion={completarPocion}
                    eliminarPocion={eliminarPocion}
                />

            ) )}
        </div>
    )
}


export default ListaDePociones;