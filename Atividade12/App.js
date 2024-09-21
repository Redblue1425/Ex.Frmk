import React, { useEffect } from 'react';


function BoasVindas3() {
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


  return (
    <div className="container mt-4">
      <h2>Bem-vindo(a)!</h2>
      <p>A mensagem de boas-vindas foi exibida.</p>
    </div>
  );
}


export default BoasVindas3;
