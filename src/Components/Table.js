import React from 'react';

const Table = ({paciente , eliminarRegistro}) => {

  const verificarEliminar = (id) => {
    eliminarRegistro(id);
  }
  return ( 
    <>
        <div className="cita" >
            <p>Nombre Paciente: <span>{paciente.nombre}</span></p>
            <p>Tutor: <span>{paciente.tutor}</span></p>
            <p>Fecha cita: <span>{paciente.fecha}</span></p>
            <p>Síntomas: <span>{paciente.sintomas}</span></p>
            <button 
            type="button"
            className="u-full-width button eliminar button eliminar"
            onClick={() => {verificarEliminar(paciente.id)}}
          >Eliminar</button>
        </div>
        
    </>
   );
}
 
export default Table;