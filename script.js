console.log("Script carregado");

const projetos = [

  {
    nome: "SIGEC(Sistema de Gerenciamento Comercial)",
    descricao: "Sistema para gerenciar produtos, vendas e estoque.",
    link: "https://vict0r213.github.io/Sigec/"
  }
  ];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver mais</a>
  `;

  container.appendChild(div);
});
