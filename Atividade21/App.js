import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ListaUC2() {
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
          <h2 className="mb-3">Unidades Curriculares - Semestre Atual</h2>


          <ul className="list-group">
            <li className="list-group-item">Física</li>
            <li className="list-group-item">Química</li>
            <li className="list-group-item">Biologia</li>
            <li className="list-group-item">Matemática</li>
            <li className="list-group-item">Língua Portuguesa</li>
            <li className="list-group-item">Educação Física</li>
            <li className="list-group-item">Redes de Computadores</li>
            <li className="list-group-item">Frameworks</li>
            <li className="list-group-item">Programação para Dispositivos Móveis</li>
            <li className="list-group-item">Metodologia de Pesquisa</li>
            <li className="list-group-item">História</li>
            <li className="list-group-item">Empreendedorismo</li>
          </ul>
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


export default ListaUC2;
