import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categorias }) => {
    return (
        <div>
            <h1>Categorias lista</h1>
            {
                categorias.map((cate, index) => (
                    <Cards cate={cate} key={index}/>
                ))
            }
        </div>
    )
}

export default CategoriasList