import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Paragrafo() {


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
          <p>
            Durante o meu percurso acadêmico no curso de Informática, tive a oportunidade de explorar diversos temas relacionados à tecnologia. A matéria que mais gostei foi Sistemas Operacionais, pois me fascinou entender como o software gerencia os recursos de hardware. No entanto, tive mais dificuldades em Frameworks, que exigiu bastante dedicação. No geral, gostei muito do curso e dos desafios que ele proporcionou ao longo do tempo.
          </p>
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


export default Paragrafo;
