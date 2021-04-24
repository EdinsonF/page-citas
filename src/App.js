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

  return (
      <> 
      <h1>Adminitrador de citas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form guardarRegistro={guardarRegistro}/>
          </div>
          <div className="one-half column">
            <h2>Lista</h2>
              {PacientesList.map(paciente =>(
                
                <Table
                key={paciente.id}
                paciente={paciente} />
              )

            )}
              
              <img src={logo} className="App-logo" alt="logo" />
          </div>
          
            <header className="App-header">
              
            </header>
        </div>
      </div>
      
      </>
     
    
  );
}

export default App;
