import React from 'react';
import axios from 'axios'
import {url} from '../../helpers/url'
import {fileUpload} from '../../helpers/fileUpload'

const Form = () => {
    const [equipos, setEquipos] = React.useState({
        equipo:"",
        deporte:"",
        jugador:"",
        imgEscudo:"",
        titulos:"",
    })
    const {equipo, deporte, jugador, imgEscudo, titulos} = equipos
    const handleChange = ({ target }) => {
        setEquipos({
            ...equipos,
            [target.name]: target.value
        })
        console.log(equipos);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                equipos.imgEscudo = response
            }).catch(error => {
                console.log(error);
            })
    }
    const postData = () => {
        axios.post(url, equipos)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='equipo' name="equipo" value={equipo} onChange={handleChange}/>
            <input type="text" placeholder='deporte' name="deporte" value={deporte} onChange={handleChange}/>
            <input type="text" placeholder='mejor jugador' name="jugador" value={jugador} onChange={handleChange}/>
            <input id="" type="file" name="imgEscudo" value={imgEscudo} onChange={handleFile}/>
            <input type="text" placeholder='titulos' name="titulos" value={titulos} onChange={handleChange}/>
            <button onClick={postData}>Enviar</button>
        </form>
    );
};

export default Form;