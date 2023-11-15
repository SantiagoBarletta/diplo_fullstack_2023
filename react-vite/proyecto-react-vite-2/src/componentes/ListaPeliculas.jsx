import Casa from "./Peliculas";
import casas from './datosPeliculas';



function ListaPeliculas(){

    return(
<div>
            {casas.map((casa, index) => (
            <Casa 
                key={index}
                nombre={casa.nombre}
                valores={casa.valores}
                animal={casa.animal}
                color={casa.color}
                ubicacion={casa.ubicacion}
                imagen={casa.imagen}

            />

        ))}
      </div>
    )
}


export default ListaPeliculas;