import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function BoasVindas3() {
  const [bgColor, setBgColor] = useState('#CCCFFF');


  useEffect(() => {
    const currentHour = new Date().getHours();
    let mensagem;


    if (currentHour < 12) {
      mensagem = "Bom dia!";
    } else if (currentHour < 18) {
      mensagem = "Boa tarde!";
    } else {
      mensagem = "Boa noite!";
    }


    alert(mensagem);
  }, []);


  const mudarCorFundo = () => {
    setBgColor(prevColor => (prevColor === '#CCCFFF' ? '#FFFFFF' : '#CCCFFF'));
  };


  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: bgColor, display: 'flex', flexDirection: 'column' }}>
     
      <header className="App-header" style={{ backgroundColor: '#DDDDDD', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
        <h1>Bem-vindo ao Meu App</h1>
        <button className="btn btn-primary" onClick={mudarCorFundo}>
          Trocar Cor
        </button>
      </header>


      <div style={{ flexGrow: 1, padding: '20px' }}>
        <div className="container mt-4">
          <h2>Bem-vindo(a)!</h2>
          <p>A mensagem de boas-vindas foi exibida.</p>
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


export default BoasVindas3;
