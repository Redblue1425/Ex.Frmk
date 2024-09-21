import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListaUC2() {
  return (
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
  );
}

export default ListaUC2;