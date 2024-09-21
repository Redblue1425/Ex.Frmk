import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BoasVindas2() {
  const [mensagem, setMensagem] = useState('');
  const [corFundo, setCorFundo] = useState('#CCCFFF');

  const exibirMensagem = () => {
    const currentHour = new Date().getHours();
    let mensagem;

    if (currentHour < 12) {
      mensagem = "Bom dia!";
    } else if (currentHour < 18) {
      mensagem = "Boa tarde!";
    } else {
      mensagem = "Boa noite!";
    }

    setMensagem(mensagem);
  };

  const alterarCorDeFundo = () => {
    setCorFundo('#FFFFFF');
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: corFundo }}>
      <header className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#DDDDDD', height: '100px', padding: '10px' }}>
        <h1>Boas Vindas</h1>
        <button className="btn btn-secondary" onClick={alterarCorDeFundo}>
          Alterar Cor de Fundo
        </button>
      </header>

      <main className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={exibirMensagem}>
          Clique em mim
        </button>
        {mensagem && (
          <div className="alert alert-info mt-3" role="alert">
            {mensagem}
          </div>
        )}
      </main>

      <footer className="App-footer" style={{ backgroundColor: '#DDDDDD', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="mb-0">
          Nome Completo do Estudante: Lucas Rodrigues Antunes | E-mail: lucas.antunes@estudante.ifms.edu.br | Data de Criação: 20/09/2024 | Data de Entrega: 20/09/2024
        </p>
      </footer>
    </div>
  );
}

export default BoasVindas2;
