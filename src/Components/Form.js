import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({guardarRegistro}) => {


  const [Paciente, setPaciente] = useState({
      nombre:  "",
       tutor:  "",
       fecha:  "",
    sintomas:  ""

  });


  const [Error, setError] = useState({
    error: false
  });

  const handleChange = (e) => {
      setPaciente({
        ...Paciente,
        [e.target.name] : e.target.value
      });
  }


  const prepararRegistro = (e) => {
    Paciente.id = uuidv4();
    guardarRegistro(Paciente);

    setPaciente({
      nombre:  "",
       tutor:  "",
       fecha:  "",
    sintomas:  ""
    });
   
  }

  const {nombre , tutor , fecha , sintomas} = Paciente;

  const validarCampos = (e) => {
    e.preventDefault();
    
    if(nombre.trim() === '' || tutor.trim() === '' || fecha === '' || sintomas === '')
    {
      setError({
        mensaje: "Todos los campos son obligatorios",
        error : true
      })

      setTimeout(() =>{
        setError({
          error : false
        });
      },2000);
      return;
    }

    prepararRegistro();

  }

  return ( 
    <>
      <h2>Crear Cita</h2>
      { Error.error ? <p className="alerta-error">{Error.mensaje}</p> : null}
      <form onSubmit={validarCampos}>
        <label>Nombre Paciente</label>
        <input 
            type="text"
            name="nombre"
            className="u-full-width"
            placeholder="Nombre"
            value={nombre}
            onChange={handleChange}
        />

        <label>Tutor</label>
          <input 
              type="text"
              name="tutor"
              className="u-full-width"
              placeholder="Tutor"
              value={tutor}
              onChange={handleChange}
          />

        <label>Fecha</label>
          <input 
              type="date"
              name="fecha"
              className="u-full-width"
              value={fecha}
              onChange={handleChange}
        />

        <label>Síntomas</label>
          <textarea 
              className="u-full-width"
              name="sintomas"
              value={sintomas}
              onChange={handleChange}
          ></textarea>

        <button 
            type="submit"
            className="u-full-width registrar"
        >Agregar</button>
      </form>
    </>
   );
}
 
export default Form;
