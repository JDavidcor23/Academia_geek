
export const personajes = async() => {
   

        const url = 'https://rickandmortyapi.com/api/character/';
        const res = await fetch(url);
        const {results} = await res.json();
        return results

}