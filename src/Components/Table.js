import React from 'react';

const Table = ({paciente}) => {
  return ( 

        <div className="cita">
            <p>Nombre Paciente: <span>{paciente.nombre}</span></p>
            <p>Tutor: <span>{paciente.tutor}</span></p>
            <p>Fecha cita: <span>{paciente.fecha}</span></p>
            <p>Síntomas: <span>{paciente.sintomas}</span></p>

        </div>

   );
}
 
export default Table;