import {personajes} from './personajes.js'
import  './style.css'
const root = document.getElementById("root")

document.addEventListener("DOMContentLoaded", async() =>{
    console.log("prueba")
    const lista = await personajes()
    lista.forEach(element => {
        const {image, name, species} = element
        root.innerHTML+=`
        <h1>Personajes Rick and Morty</h1>
        <div className="card">
            <img className="card-img-top" src=${image} alt="" />
            <div className="card-body">
                <h5 className="card-title">${name}</h5>
                <p className="card-text">${species}</p>
                <a href="/" className="btn btn-primary">...Más</a>
            </div>
        </div>
        `
    });
})
