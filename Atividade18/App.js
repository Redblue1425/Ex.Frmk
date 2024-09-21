import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tabela1() {


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
          <h2 className="mb-3">Atividades Avaliativas - Segundo Bimestre</h2>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data da Atividade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Entrega do Trabalho</td>
                <td>20/09</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Apresentação do Seminário</td>
                <td>20/09</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Entrega da Lista de Exercícios</td>
                <td>20/09</td>
              </tr>
            </tbody>
          </table>
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


export default Tabela1;