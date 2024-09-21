import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Imagem() {
   
  const [bgColor, setBgColor] = useState("#CCCFFF");


  const alterarCorDeFundo = () => {
    setBgColor("#FFFFFF");
  };


  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: bgColor, display: 'flex', flexDirection: 'column' }}>
     
      <header className="App-header" style={{ backgroundColor: '#DDDDDD', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={alterarCorDeFundo}>
          Alterar Cor de Fundo
        </button>
      </header>


      <div style={{ backgroundColor: bgColor, flexGrow: 1, padding: '20px' }}>
        <div className="container">
          <figure className="text-center mt-4">
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/cybertruck-1.webp"
              alt="Tesla Cybertruck"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <figcaption className="mt-3 text-muted">
              Carro autônomo Tesla Cybertruck
            </figcaption>
          </figure>
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


export default Imagem;
