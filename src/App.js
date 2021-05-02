import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import Form from './Components/Form';
import Table from './Components/Table';



function App() {

  let storageBD = JSON.parse(localStorage.getItem('pacientes'));
    if(!storageBD){
 
        storageBD = [];
    }

    const [PacientesList, setPacientesList] = useState(storageBD)

    useEffect(() => {

        localStorage.setItem('pacientes', JSON.stringify(PacientesList));
 
      
    }, [PacientesList]);

   


    const guardarRegistro = (paciente) => {
      setPacientesList([
        ...PacientesList,
        paciente
      ]);
    }

    const eliminarRegistro = (id) => {
      let save = PacientesList.filter(list => list.id !== id );

      setPacientesList(save);
      
    }


    let lista = (PacientesList.length !== 0) ? "pacientes" : "Sin Registros...";

  return (
      <> 
      <h1><img src={logo} className="Imagen" alt="logo" />Adminitrador de citas <img src={logo} className="Imagen" alt="logo" /></h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form guardarRegistro={guardarRegistro}/>
          </div>
          <div className="one-half column">
            <h2>{lista}</h2>
            
              {   PacientesList.map(paciente =>(
                
                <Table
                key={paciente.id}
                paciente={paciente} 
                eliminarRegistro={eliminarRegistro}/>
              )

            )
          }
              
              
          </div>
          
            <header className="App-header">
              
            </header>
        </div>
      </div>
      
      </>
     
    
  );
}

export default App;
