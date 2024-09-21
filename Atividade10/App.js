import React from 'react';

function BoasVindas1() {
  const currentHour = new Date().getHours();
  let mensagem;


  if (currentHour < 12) {
    mensagem = "Bom dia!";
  } else if (currentHour < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }


  return (
    <div className="container mt-4">
      <p>{mensagem}</p>
    </div>
  );
}

export default BoasVindas1;