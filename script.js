const projetos = [
  {
    nome: "Sistema de Pedidos Online",
    descricao: "Aplicação para restaurantes gerenciarem pedidos.",
    link: "#"
  },
  {
    nome: "Controle de Estoque de Farmácia",
    descricao: "Sistema para gerenciar produtos e vendas.",
    link: "#"
  },
  {
    nome: "App de Delivery",
    descricao: "Plataforma simples de pedidos e entregas.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((projeto, index) => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.style.animationDelay = `${index * 0.2}s`;

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver mais</a>
  `;

  container.appendChild(div);
});