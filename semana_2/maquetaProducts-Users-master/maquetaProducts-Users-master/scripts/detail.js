const listgroup = document.querySelector(".list-group")

const getLoclStorage = () =>{
    const det = JSON.parse(localStorage.getItem('Detalle'))
    const  {name, description, img, price} = det
    listgroup.innerHTML+=`
    <li class="card" style="width: 18rem;">
    <div class="card-body">
     <img src=${img} class="card-img-top" alt="${name}">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <h5 class="card-title">USD$ ${price}</h5>
      <a href="#" class="btn btn-outline-dark " style="background-color: #db7093;">Return</a>
    </div>
  </li>
    `
}
document.addEventListener("DOMContentLoaded",async ()=>{
    getLoclStorage()
})