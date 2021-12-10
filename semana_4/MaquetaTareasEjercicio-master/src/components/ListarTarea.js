import React from 'react';
import {Link} from 'react-router-dom'
import { url } from '../helpers/url';

export const ListarTarea = ({tareas}) => {
    const handleEliminar = async(id) =>{
        await fetch(url + id,{
            method:"DELETE"
        })
    }
    return (
        <div>
            <h3 className="text-center">Lista de Tareas</h3>
            <ul className="list-group">
                {
                    tareas.map(tarea =>(
                    <li className="list-group-item" key={tarea.id}>
                        <span className="lead">{tarea.nombre}</span>
                        <button
                            className="btn btn-danger btm-sm float-end "
                            onClick={() => handleEliminar(tarea.id)}
                        >
                            Borrar
                        </button>
                        <Link
                            className="btn btn-success btm-sm float-end mx-2"
                            to={`detalle/${tarea.id}`}
                        >
                            Detalle
                        </Link>
                    </li>

                    ))
                }
            </ul>
        </div>
    )
}
