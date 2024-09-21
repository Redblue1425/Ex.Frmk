import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function BoasVindas2() {
  const [mensagem, setMensagem] = useState('');


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


  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={exibirMensagem}>
        Clique em mim
      </button>
      {mensagem && (
        <div className="alert alert-info mt-3" role="alert">
          {mensagem}
        </div>
      )}
    </div>
  );
}

export default BoasVindas2;