import { personajes } from "./personajes";
import { ejemplo } from "./ejemplo";
import './styles.css';

const contenedor = document.getElementById('contenedor');

document.addEventListener('DOMContentLoaded', async () => {
   contenedor.innerHTML += ejemplo();
   const pers = await personajes();
   console.log(pers);
   pers.forEach(element => {
       const {image,name,species} = element;
       contenedor.innerHTML += `
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