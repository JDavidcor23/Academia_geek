import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from '../container/Container'
import { url } from '../helpers/url';
import Navbar from '../components/Navbar'
import Detalle from '../components/Detalle'
const AppRoutes = () => {

    const [tarea, setTarea] = React.useState([])

    React.useEffect(() => {
        cargarDatos()
    }, [setTarea])

    const cargarDatos = async() => {
        const resp =await fetch(url)
        const data =await resp.json()
        setTarea(data)
    }
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Container tareas={tarea}/>}/>
                <Route path="/detalle/:id" element={<Detalle tareas={tarea}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;