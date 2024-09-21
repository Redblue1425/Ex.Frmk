import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tabela2() {
  const [bgColor, setBgColor] = useState("#CCCFFF");


  const alterarCorDeFundo = () => {
    setBgColor("#FFFFFF");
  };


  const activities = [
    { item: 1, description: 'Entrega do Trabalho', date: '20/09' },
    { item: 2, description: 'Apresentação do Seminário', date: '20/09' },
    { item: 3, description: 'Entrega da Lista de Exercícios', date: '20/09' },
  ];


  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: bgColor, display: 'flex', flexDirection: 'column' }}>
     
      <header className="App-header" style={{ backgroundColor: '#DDDDDD', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={alterarCorDeFundo}>
          Alterar Cor de Fundo
        </button>
      </header>


      <div style={{ backgroundColor: bgColor, flexGrow: 1, padding: '20px' }}>
        <div className="container mt-4">
          <h2 className="mb-3">Atividades Avaliativas - Segundo Bimestre</h2>


          <div className="row font-weight-bold bg-dark text-white py-2">
            <div className="col-2">Item</div>
            <div className="col-6">Descrição</div>
            <div className="col-4">Data da Atividade</div>
          </div>


          {activities.map((activity) => (
            <div className="row py-2 border-bottom" key={activity.item}>
              <div className="col-2">{activity.item}</div>
              <div className="col-6">{activity.description}</div>
              <div className="col-4">{activity.date}</div>
            </div>
          ))}
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


export default Tabela2;