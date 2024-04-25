let escolherProduto = [];
let button = document.querySelector("button");
let descer = document.querySelector("body");

function adicionarProduto() {
  const nomeProduto = prompt("Digite o nome do produto:");
  const valorProduto = prompt("Digite o valor do produto:");
  const corProduto = prompt("Digite a cor do seu produto:");

  escolherProduto.push({ nome: nomeProduto, valor: valorProduto, cor: corProduto });

  const continuar = confirm("Deseja adicionar outro produto a sua lista de compras?");

  if (continuar) {
    adicionarProduto();
  } else {
    const quantidadeProdutos = escolherProduto.length;
    let mensagem = `Você selecionou ${quantidadeProdutos} produtos:\n\n`;

    escolherProduto.forEach((produto) => {
      mensagem += `Produto: ${produto.nome}\nValor: R$ ${produto.valor}\nCor: ${produto.cor}\n\n`;
    });

    alert(mensagem);
  }
}

button.addEventListener("click", adicionarProduto);