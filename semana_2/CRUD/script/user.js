import {url} from './url.js'

const ul = document.querySelector(".list-group")

const getUser = async () =>{

    const respuesta = await fetch(url)
    const data = await respuesta.json()
    data.forEach(element =>{
         const {url, nombre, id} = element
        ul.innerHTML+=`
        <li class="list-group-item">
            <span class="lead">${nombre}</span>
            <img src=${url} width="50px"></img>
            <button id=${id} class="btn btn-dark btm-sm float-end ">
                Borrar
            </button>
        </li>
        `

    })
}

window.addEventListener('DOMContentLoaded', getUser)

ul.addEventListener('click', async(e) =>{
    e.preventDefault();
   const btnEliminar = e.target.classList.contains('btn-dark')

   const id = e.target.id

   if(btnEliminar === true){
      await fetch(url+id,{
          method: 'DELETE'
      })
   }
})

const capturaDatos = () => {

    const url = document.getElementById('inputUrl').value;
    const nombre = document.getElementById('inputNombre').value;
    const correo = document.getElementById('inputCorreo').value;
    const descripcion = document.getElementById('inputDescripcion').value;

      const user = {
            url,
            nombre,
            correo,
            descripcion
        }

    return user;
}

//6 Petición POST
const form = document.querySelector('.form-group');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

})

const btnCorreo = document.getElementById("btnCorreo");


btnCorreo.addEventListener('click', async() =>{
    const inputCorreo = document.getElementById('inputCorreo').value;
    const resp = await fetch(url);
    const lista = await resp.json();
    const buscado = lista.find(per=> per.correo.toLocaleLowerCase() === inputCorreo.toLocaleLowerCase())
    if(buscado !== undefined){
        const {id,url, nombre, descripcion} = buscado
        document.getElementById('inputUrl').value = url;
        document.getElementById('inputDescripcion').value = descripcion;
        document.getElementById('inputNombre').value = nombre;
        document.getElementById('inputId').value = id;
        
    }
    else{
        alert("correo no encontrado")
    }
})
const btnModificar = document.getElementById("btnModificar");

btnModificar.addEventListener("click", async () =>{
    const capturaInfo = capturaDatos()

    const id = document.getElementById("inputId").value;

    await fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify(capturaInfo),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
})