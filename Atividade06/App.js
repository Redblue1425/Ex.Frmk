import React from 'react';


function Tabela1() {
  return (
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
            <td>Entrega do Lista de Exercícios</td>
            <td>20/09</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Tabela1;