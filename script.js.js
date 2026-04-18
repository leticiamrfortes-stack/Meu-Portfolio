const projetos = [
  {
    titulo: "Projeto 1",
    descricao: "Descrição do projeto",
    link: "#"
  },
  {
    titulo: "Projeto 2",
    descricao: "Outro projeto",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(proj => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${proj.titulo}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}">Ver mais</a>
  `;

  container.appendChild(div);
});