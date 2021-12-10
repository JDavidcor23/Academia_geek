import React from 'react';
import axios from 'axios';
import '../styles/List.css';
import {url} from '../helpers/url'

export const List = () => {

    const [estudiantes, setEstudiantes] = React.useState([])

    const getData = () =>{
        axios.get(url)
        .then(resp =>{
            setEstudiantes(resp.data)
        }).catch(err =>{
            console.log(err)
        })
    }
    const dataDelete=(id)=>{
        axios.delete(url + id)
            .then(resp =>{
                getData()
            }).catch(err=>{
                console.log(err)
            })
    }
    React.useEffect(()=>{
        getData()
    })
   
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre Completo</th>
                    <th>Tipo Documento</th>
                    <th>Número Documento</th>
                    <th>Teléfono</th>
                    <th>Celular</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        estudiantes.map(estudiante => (
                            <tr key={estudiante.id}>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.tipo}</td>
                                <td>{estudiante.numero}</td>
                                <td>{estudiante.telefonp}</td>
                                <td>{estudiante.celular}</td>
                                <td>{estudiante.direccion}</td>
                                <td>{estudiante.imagen}</td>
                                <td><button onClick={() =>dataDelete(estudiante.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
