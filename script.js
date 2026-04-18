const projetos = [
  {
    nome: "Portfólio Pessoal",
    descricao: "Site moderno e responsivo.",
    link: "#"
  },
  {
    nome: "App JavaScript",
    descricao: "Projeto com manipulação do DOM.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((proj, index) => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);

  // animação com delay
  setTimeout(() => {
    div.classList.add("show");
  }, 200 * index);
});
