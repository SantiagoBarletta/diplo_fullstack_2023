import { useState, useEffect } from "react";
import FormularioDePociones from "./FormularioDePociones"
import ListaDePociones from "./ListaDePociones";

const GestionPociones = () =>{
// Estado para almacenar las pociones
const [pociones, setPociones] = useState([]);

//Carga inicial de pociones desde localStorage
useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
    if(pocionesGuardadas){
        setPociones(pocionesGuardadas)
    }
}, []);

//Almacena las pociones en local storage cuando cambia el estado
useEffect (() => {
    localStorage.setItem('pociones', JSON.stringify(pociones))
}, [pociones])



//Marcar una poción como completada o no
const completarPocion = (id) =>{
    const nuevasPociones = pociones.map((pocion) =>
    pocion.id === id ? { ...pocion, completada: !pocion.completada }:pocion
    )
    setPociones(nuevasPociones);

}



//Agregar una nueva pocion a la lista
const agregarPocion = (nombre) =>{
    const nuevaPocion ={
        id: Date.now(), //generar ID unico
        nombre,
        completada: false,
    };
    setPociones([...pociones, nuevaPocion])
};

    return(
        <div>
            <h1> Gestión de peliculas a ver </h1>
            <b><ListaDePociones
            pociones={pociones}
            completarPocion={completarPocion}
            /></b>
            <FormularioDePociones agregarPocion={agregarPocion} />
        </div>
    )
}

export default GestionPociones;