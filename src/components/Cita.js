import React from 'react';


const Citas = ({cita, eliminarCita}) =>(
    <div className="col-lg-6 mb-3">
        <div className="p-5 shadow-sm rounded bg-white">
            <p className="m-0 text-success"><b>{cita.mascota}</b></p>
            <p className="m-0">Dueño: {cita.propietario}</p>
            <p className="m-0">Día: {cita.fecha} - {cita.hora}hs</p>
            <p>Sintomas:</p>
            <div className="rounded p-2 bg-light">
                <p className="m-0">{cita.sintomas}</p>
            </div>
            <button 
                className=" mt-4 btn btn-danger"
                //espera a que des click y ejecuta la funcion con el valor
                onClick={() => eliminarCita(cita.id)}
            >Borrar</button>
            
        </div>

    </div>

);

export default Citas;