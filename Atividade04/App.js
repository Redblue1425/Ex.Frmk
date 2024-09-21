import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Imagem() {
  return (
    <figure className="text-center mt-4">
      <img 
        src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/cybertruck-1.webp" 
        alt="Tesla Cybertruck" 
        className="img-fluid rounded" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <figcaption className="mt-3 text-muted">
        Carro autônomo Tesla Cybertruck
      </figcaption>
    </figure>
  );
}

export default Imagem;
