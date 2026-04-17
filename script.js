console.log("Script carregado");

document.addEventListener("DOMContentLoaded", () => {

  const projetos = [
    {
      nome: "SIGEC (Sistema de Gerenciamento Comercial)",
      descricao: "Sistema para gerenciar produtos, vendas e estoque.",
      link: "https://vict0r213.github.io/Sigec/"
    }
  ];

  const habilidades = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "MySQL",
    "Responsividade",
    "UI/UX Design"
  ];

  // Renderizar Projetos
  const containerProjetos = document.getElementById("lista-projetos");

  if (containerProjetos) {
    projetos.forEach((projeto) => {
      const div = document.createElement("div");
      div.classList.add("projeto");

      div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Acessar sistema</a>
      `;

      containerProjetos.appendChild(div);
    });
  } else {
    console.error("ERRO: container de projetos não encontrado");
  }

  // Renderizar Habilidades
  const containerHabilidades = document.getElementById("lista-habilidades");

  if (containerHabilidades) {
    habilidades.forEach((habilidade) => {
      const span = document.createElement("span");
      span.classList.add("habilidade");
      span.textContent = habilidade;
      containerHabilidades.appendChild(span);
    });
  } else {
    console.error("ERRO: container de habilidades não encontrado");
  }

});
