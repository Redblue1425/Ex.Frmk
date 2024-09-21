import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function BoasVindas1() {
  const currentHour = new Date().getHours();
  let mensagem;


  if (currentHour < 12) {
    mensagem = "Bom dia! Bem vindo a minha página.";
  } else if (currentHour < 18) {
    mensagem = "Boa tarde! Bem vindo a minha página.";
  } else {
    mensagem = "Boa noite! Bem vindo a minha página.";
  }


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
        <div className="container mt-4">
          <p className="h4">{mensagem}</p>
        </div>
      </div>


      <footer className="App-footer" style={{ backgroundColor: '#DDDDDD', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="mb-0">
          Nome Completo do Estudante: Lucas Rodrigues Antunes | E-mail: lucas.antunes@estudante.ifms.edu.br | Data de Criação: 20/09/2024 | Data de Entrega: 20/09/2024
        </p>
      </footer>
    </div>
  );
}


export default BoasVindas1;
