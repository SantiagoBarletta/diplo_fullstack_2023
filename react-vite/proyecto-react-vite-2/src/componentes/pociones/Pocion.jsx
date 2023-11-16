import './ListaDePociones.css'

const Pocion = ({ pocion, completarPocion, eliminarPocion }) =>{
    const { id, nombre, completada } = pocion;
    
    const completar = () =>{
        completarPocion(id);
    };

    const eliminar = () =>{
        eliminarPocion(id);
    }

    return(
        <div className="pocion">
        <span className={completada ? 'vista' : 'pendiente'}>{nombre}</span>
        <button onClick={completar}>
            {completada ? 'Pendiente' : 'Vista'}
        </button>
        <button onClick={eliminar}>Eliminar</button>

        </div>
    )
}


export default Pocion;