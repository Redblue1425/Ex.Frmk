import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TabelaAtividades() {
  const atividades = [
    {
      id: 1,
      dataRealizacao: '18/09/2024',
      inicio: '15:02',
      conclusao: '15:15',
      observacoes: 'Foi fácil realizar esta atividade porque estava familiarizado com o conteúdo.'
    },
    {
      id: 2,
      dataRealizacao: '18/09/2024',
      inicio: '15:17',
      conclusao: '15:26',
      observacoes: 'Fácil, sem muitas dificuldades de realização por ja ter feito MUITO.'
    },
    {
      id: 3,
      dataRealizacao: '18/09/2024',
      inicio: '15:28',
      conclusao: '15:33',
      observacoes: 'Muito tranquilo, o bootstrap fez praticamente todo o trabalho.'
    },
    {
      id: 4,
      dataRealizacao: '18/09/2024',
      inicio: '15:35',
      conclusao: '15:42',
      observacoes: 'Fácil, mas tive que pesquisar qual a tag certa para legenda.'
    },    {
      id: 5,
      dataRealizacao: '18/09/2024',
      inicio: '15:46',
      conclusao: '15:58',
      observacoes: 'Tranquilo, tive um pouco de dificuldade de formular o paragrafo, mas depois que comecei foi fácil.'
    },
    {
      id: 6,
      dataRealizacao: '18/09/2024',
      inicio: '16:03',
      conclusao: '16:15',
      observacoes: 'Foi fácil, só tive que puxar de desenvolvimento web como fazia uma tabela certinho.'
    },
    {
      id: 7,
      dataRealizacao: '18/09/2024',
      inicio: '16:18',
      conclusao: '16:40',
      observacoes: 'Foi um pouco mais complexo, me exigiu uma certa criatividade e muitos testes (que falharam) até que eu conseguisse.'
    },
    {
      id: 8,
      dataRealizacao: '18/09/2024',
      inicio: '16:44',
      conclusao: '16:57',
      observacoes: 'Foi fácil, ja tinha uma noção melhor de listas.'
    },
    {
      id: 9,
      dataRealizacao: '18/09/2024',
      inicio: '17:00',
      conclusao: '17:04',
      observacoes: 'Fácil, só usei o mesmo princípio do exercicío anterior e troquei algumas coisas.'
    },
    {
      id: 10,
      dataRealizacao: '18/09/2024',
      inicio: '17:06',
      conclusao: '17:28',
      observacoes: 'Essa exigiu mais de mim, tive que pesquisar e entender como pegar e trabalhar com a hora do PC.'
    },
    {
      id: 11,
      dataRealizacao: '18/09/2024',
      inicio: '17:31',
      conclusao: '17:39',
      observacoes: 'Foi mais tranquila por conta de ja ter entendido sobre a hora e só apliquei o mesmo conceito e mudei algumas partes.'
    },
    {
      id: 12,
      dataRealizacao: '18/09/2024',
      inicio: '17:43',
      conclusao: '17:50',
      observacoes: 'Foi mais tranquila por conta de ja ter entendido sobre a hora e só apliquei o mesmo conceito e mudei algumas partes.'
    },
    {
      id: 13,
      dataRealizacao: '19/09/2024',
      inicio: '07:30',
      conclusao: '07:40',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 14,
      dataRealizacao: '19/09/2024',
      inicio: '07:42',
      conclusao: '07:48',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 15,
      dataRealizacao: '19/09/2024',
      inicio: '08:05',
      conclusao: '08:12',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 16,
      dataRealizacao: '19/09/2024',
      inicio: '08:14',
      conclusao: '08:20',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 17,
      dataRealizacao: '19/09/2024',
      inicio: '08:25',
      conclusao: '08:30',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 18,
      dataRealizacao: '19/09/2024',
      inicio: '08:32',
      conclusao: '08:38',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 19,
      dataRealizacao: '19/09/2024',
      inicio: '10:29',
      conclusao: '10:35',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 20,
      dataRealizacao: '19/09/2024',
      inicio: '10:38',
      conclusao: '10:44',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 21,
      dataRealizacao: '20/09/2024',
      inicio: '11:28',
      conclusao: '11:36',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 22,
      dataRealizacao: '20/09/2024',
      inicio: '11:42',
      conclusao: '11:50',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 23,
      dataRealizacao: '20/09/2024',
      inicio: '11:53',
      conclusao: '12:00',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 24,
      dataRealizacao: '20/09/2024',
      inicio: '12:07',
      conclusao: '12:16',
      observacoes: 'Foi fácil, apenas estilizei o exercicío que ja estava pronto e adicionei o botão no cabeçalho e as informações do rodapé.'
    },
    {
      id: 25,
      dataRealizacao: '20/09/2024',
      inicio: '17:40',
      conclusao: '19:05',
      observacoes: 'Foi fácil de fazer, mas admito que foi um tanto chato de montar e ficar olhando a tabela de horas.'
    },
    
];

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Relatório de Atividades</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Data Real de Realização</th>
            <th scope="col">Horário de Início</th>
            <th scope="col">Horário de Conclusão</th>
            <th scope="col">Observações</th>
          </tr>
        </thead>
        <tbody>
          {atividades.map((atividade) => (
            <tr key={atividade.id}>
              <td>{atividade.id}</td>
              <td>{atividade.dataRealizacao}</td>
              <td>{atividade.inicio}</td>
              <td>{atividade.conclusao}</td>
              <td>{atividade.observacoes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaAtividades;
