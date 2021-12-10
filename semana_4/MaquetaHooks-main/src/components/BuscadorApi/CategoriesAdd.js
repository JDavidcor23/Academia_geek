import React from 'react';

const CategoriesAdd = ({setCategorias}) => {
    const [search, setSearch] = React.useState('')
    const searchRef = React.useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
        setCategorias(categorias =>[search, ...categorias])
        setSearch('')
    }
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }
    React.useEffect(() =>{
        searchRef.current.focus()
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
            ref = {searchRef}
            name="search"
            placeholer="categorias"
            onChange={handleChange}
            />
        </form>
    );
};

export default CategoriesAdd;