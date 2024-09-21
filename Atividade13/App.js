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
          <p>
            React JS é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário, especialmente em aplicações de página única. Ele permite a criação de componentes reutilizáveis que gerenciam seu próprio estado, facilitando o desenvolvimento de interfaces complexas.
          </p>
          <p>
            Uma característica chave do React é o uso do Virtual DOM, que otimiza as atualizações na interface ao renderizar apenas os componentes que realmente mudaram. Isso melhora o desempenho das aplicações, tornando-as mais rápidas e responsivas.
          </p>
          <p>
            O React adota uma abordagem declarativa, onde os desenvolvedores definem como a interface deve se parecer em diferentes estados, e o React gerencia as mudanças de forma eficiente. Essa simplicidade torna o código mais fácil de manter e depurar, sendo amplamente utilizado em grandes aplicações web.
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


export default App;
