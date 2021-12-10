import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detalle = ({tareas}) => {  
   const params = useParams()
   const {id} = params
   const navigate = useNavigate()
   const buscando = tareas.find(index =>index.id === Number(id))
    return (
        <div>
             <div className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">
                 <div className="card text-white bg-dark ms-3 py-3"  >
                     <div className="">
                         <img src={buscando.url} className="img-fluid rounded-start" alt="..." width="200px" /> 
                     </div>
                     <div className="row">
                         <div className="col-md-12">
                             <div className="card-body">
                                 <h5 className="card-title">{buscando.nombre}</h5>
                                 <p className="card-title">{buscando.descripcion}</p> 
                             </div>
                         </div>
                     </div>
                     <div className='row'>
                         <div className='col'>
                             <button
                                 className="btn btn-warning btm-sm mx-2"
                                 onClick={() => navigate('/')}
                             >
                                 Atras
                             </button>
                         </div>
                         <div className='col'>
                             <button
                                 className="btn btn-warning btm-sm mx-2"
                                 data-bs-toggle="modal" data-bs-target="#exampleModal"
                             >
                                 Abrir modal
                             </button>
                         </div>
                     </div>
                     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color:"black"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{buscando.nombre}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <img src={buscando.url} className="img-fluid rounded-start" alt="..." width="200px" /> 
                            <p> {buscando.descripcion}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>
 
             </div>
         </div>
    );
};

export default Detalle;