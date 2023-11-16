import { useState } from 'react';

const FormularioDePociones = ({ agregarPocion }) => {
const [nuevaPocion, setNuevaPocion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaPocion.trim() !== '') {
        agregarPocion(nuevaPocion);
        setNuevaPocion('');
        }
    };

    return (
        <form onSubmit={handleSubmit} class="input-group mb-3">
        <input className='class="custom-file-label'
            type="text"
            value={nuevaPocion}
            onChange={(e) => setNuevaPocion(e.target.value)}
            placeholder="Nueva Película"
        />
        <button type="submit" className="btn btn-primary btn-sm">Agregar</button>
        </form>
    );
    };

export default FormularioDePociones;