export const personajes = async() => {
    const url = "https://rickandmortyapi.com/api/character/"
    const resp = await fetch(url)
    const {results} = await resp.json()
    return results
}