import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import CategoriasList  from './CategoriasList'
import CategoriesAdd  from './CategoriesAdd'

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState(['Horror'])

    const handleAgregar =() =>{
        setCategorias([...categorias,"Risas"])
    }
    return (
        <div>
            <CategoriesAdd setCategorias={setCategorias}/>
            <h1>CategoriasApp</h1>
            <CategoriasList categorias={categorias}/>
            <Button variant="primary" onClick={handleAgregar}>Modificar</Button>
        </div>
    )
}

export default CategoriasApp