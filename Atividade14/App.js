import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    const [bgColor, setBgColor] = useState("#CCCFFF");


  const alterarCorDeFundo = () => {
    setBgColor("#FFFFFF");
  };


  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#CCCFFF', display: 'flex', flexDirection: 'column' }}>
     
      <header className="App-header" style={{ backgroundColor: '#DDDDDD', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={alterarCorDeFundo}>
          Alterar Cor de Fundo
        </button>
      </header>


      <div style={{ backgroundColor: bgColor, flexGrow: 1, padding: '20px' }}>
        <div className="container">
          <h2>Formulário de Login</h2>
          <form action="" method="get" className="form-example">
            <div className="form-group">
              <label htmlFor="user">Usuário: </label>
              <input type="text" className="form-control" name="user" id="user" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha: </label>
              <input type="password" className="form-control" name="password" id="password" required />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Entrar" />
            </div>
          </form>
        </div>
      </div>
     
      <footer className="App-footer" style={{ backgroundColor: '#DDDDDD', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="mb-0">
          Nome Completo do Estudante: Lucas Rodrigues Antunes | E-mail: lucas.antunes@estudante.ifms.edu.br | Data de Criação: 19/09/2024 | Data de Entrega: 20/09/2024
        </p>
      </footer>
    </div>
  );
}


export default App;
