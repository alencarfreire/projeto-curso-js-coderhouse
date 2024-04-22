let filmesAssistidos = [];

function adicionarFilme() {
  const nomeFilme = prompt("Digite o nome do filme:");
  const dataAssistido = prompt("Digite a data em que assistiu o filme:");
  const notaFilme = parseFloat(prompt("Digite uma nota de 0 a 5 para o filme:"));

  filmesAssistidos.push({ nome: nomeFilme, data: dataAssistido, nota: notaFilme });

  const continuar = confirm("Deseja adicionar mais filmes que assistiu?");

  if (continuar) {
    adicionarFilme();
  } else {
    const quantidadeFilmes = filmesAssistidos.length;
    let mensagem = `Você assistiu ${quantidadeFilmes} filme(s):\n\n`;

    filmesAssistidos.forEach((filme) => {
      mensagem += `Filme: ${filme.nome}\nData: ${filme.data}\n\n`;
    });

    alert(mensagem);
  }
}

adicionarFilme();
