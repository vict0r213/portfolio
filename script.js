console.log("Script carregado");

document.addEventListener("DOMContentLoaded", () => {

  const projetos = [
    {
      nome: "SIGEC (Sistema de Gerenciamento Comercial)",
      descricao: "Sistema para gerenciar produtos, vendas e estoque.",
      link: "https://vict0r213.github.io/sigec/"
    }
  ];

  const container = document.getElementById("lista-projetos");

  if (!container) {
    console.error("ERRO: container não encontrado");
    return;
  }

  projetos.forEach((projeto) => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Acessar sistema</a>
    `;

    container.appendChild(div);
  });

});