import React, {useEffect, useState} from 'react';
import Cards from './Cards'

const ApiFetch = () => {
    const [api, setApi] = useState([])
    const url ="https://rickandmortyapi.com/api/character/"
    useEffect(()=>{
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                setApi(data.results)
            })
            .catch(console.warn)
        console.log(api)
    }, [url])
    return (
        <div>
            <h1>Api characters</h1>
            {api.map(personajes =>(
                <Cards
                key={personajes.id}
                personaje={personajes}
                />
            ))}
        </div>
    );
};

export default ApiFetch;