import { getData } from "./getData.js"
import {showData} from './showData.js'

const endpoint = "http://localhost:3000/products/"

const element = document.querySelector(".list-group")

document.addEventListener("DOMContentLoaded",async ()=>{
    const datos = await getData(endpoint)
    showData(datos, element);
})

element.addEventListener('click', async(e) =>{
    const id = e.target.id
    const btnDetail = e.target.classList.contains('btn-outline-dark')
    if(btnDetail){
        const lista =await getData(endpoint)
        const objeto = lista.find(list => list.id === Number(id))
        localStorage.setItem("Detalle", JSON.stringify(objeto))
        window.location.href = "detail.html"
    }
})