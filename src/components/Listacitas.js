import React from 'react';
import Cita from './Cita';


const ListaCitas = ({citas, eliminarCita}) =>{

    //imprimir un mensaje en base si hay turnos
    const mensajes = Object.keys(citas).length === 0 ? 'No hay Turnos' :
    'Turnos Agendados:';

    return(
        <div className="row">
            <div className="col-12 my-4">
                <h4 className="text-center m-0">{mensajes}</h4>
            </div>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                //paso el objeto completo para procesarlo en el componente
                cita={cita}
                eliminarCita={eliminarCita}
              />  
            ))}
        </div>
    );
}

export default ListaCitas;