import React, {useState} from 'react'
import logo from './logo.svg';
import Form from './Components/Form';
import Table from './Components/Table';


function App() {

    const [PacientesList, setPacientesList] = useState([])

    console.log(PacientesList);

    const guardarRegistro = (paciente) => {
      setPacientesList([
        ...PacientesList,
        paciente
      ]);
    }

    const eliminarRegistro = (id) => {
      let save = PacientesList.filter(list => list.id !== id );

      setPacientesList(save);
      console.log(save);
    }

  return (
      <> 
      <h1><img src={logo} className="Imagen" alt="logo" />Adminitrador de citas <img src={logo} className="Imagen" alt="logo" /></h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form guardarRegistro={guardarRegistro}/>
          </div>
          <div className="one-half column">
            <h2>Lista</h2>
            
              {  (PacientesList.length !== 0) ? PacientesList.map(paciente =>(
                
                <Table
                key={paciente.id}
                paciente={paciente} 
                eliminarRegistro={eliminarRegistro}/>
              )

            )
          : <h3> Sin registros...</h3>
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
