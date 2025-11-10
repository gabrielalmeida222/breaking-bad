const personagens = [
  {
    nome: "Walter White",
    descricao: "Professor de química que se transforma em Heisenberg.",
    episodios: "Aparece em todos os episódios (T1–T5).",
    morte: "Morre em 'Felina', último episódio da série.",
    papel: "Protagonista; chefe do império de metanfetamina.",
    imagem: "img/walter.jpg"
  },
  {
    nome: "Jesse Pinkman",
    descricao: "Ex-aluno de Walter e seu parceiro. Vive um arco de culpa e redenção.",
    episodios: "Aparece na maioria dos episódios (T1–T5).",
    morte: "Sobrevive em 'Felina' e foge; história continua em El Camino.",
    papel: "Coprotagonista; cozinheiro e distribuidor.",
    imagem: "img/jesse.jpg"
  },
  {
    nome: "Saul Goodman",
    descricao: "Advogado envolvido com criminosos.",
    episodios: "Introduzido na T2; presente até o fim.",
    morte: "Sobrevive e reaparece em Better Call Saul.",
    papel: "Advogado de Walter e Jesse.",
    imagem: "img/saul.jpg"
  },
  {
    nome: "Skyler White",
    descricao: "Esposa de Walter, que lida com as consequências de seus atos.",
    episodios: "Presente em todas as temporadas.",
    morte: "Sobrevive até o final.",
    papel: "Esposa de Walter; figura moral e conflituosa.",
    imagem: "img/skyler.jpg"
  },
  {
    nome: "Hank Schrader",
    descricao: "Agente da DEA e cunhado de Walter.",
    episodios: "Presente em todas as temporadas.",
    morte: "Morre em 'Ozymandias'.",
    papel: "Antagonista secundário; símbolo da justiça.",
    imagem: "img/hank.jpg"
  },
  {
    nome: "Hector Salamanca",
    descricao: "Ex-chefe do cartel; comunica-se com uma campainha.",
    episodios: "Aparece em múltiplas temporadas.",
    morte: "Morre em explosão junto com Gus Fring.",
    papel: "Membro do cartel mexicano.",
    imagem: "img/hector.jpg"
  },
  {
    nome: "Lydia Rodarte-Quayle",
    descricao: "Executiva da Madrigal que organiza distribuição internacional.",
    episodios: "T5.",
    morte: "Envenenada por Walter.",
    papel: "Aliada e cúmplice de Todd.",
    imagem: "img/lydia.jpg"
  },
  {
    nome: "Jack Welker",
    descricao: "Líder neonazista aliado a Heisenberg.",
    episodios: "T5.",
    morte: "Assassinado por Walter.",
    papel: "Antagonista final.",
    imagem: "img/jack.jpg"
  },
  {
    nome: "Tuco Salamanca",
    descricao: "Traficante violento, primeiro grande vilão.",
    episodios: "T1–T2.",
    morte: "Morto por Hank.",
    papel: "Chefão do cartel.",
    imagem: "img/tuco.jpg"
  },
  {
    nome: "Todd Alquist",
    descricao: "Aprendiz metódico que trabalhava com Jack.",
    episodios: "T5.",
    morte: "Estrangulado por Jesse.",
    papel: "Antagonista secundário.",
    imagem: "img/todd.jpg"
  }
];

const galeria = document.getElementById("galeria");
const balao = document.getElementById("info-balao");
const fechar = document.getElementById("fechar");

const nomeEl = document.getElementById("nome");
const descricaoEl = document.getElementById("descricao");
const episodiosEl = document.getElementById("episodios");
const morteEl = document.getElementById("morte");
const papelEl = document.getElementById("papel");

personagens.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}">
    <h3>${p.nome}</h3>
  `;
  card.addEventListener("click", () => {
    nomeEl.textContent = p.nome;
    descricaoEl.textContent = p.descricao;
    episodiosEl.textContent = p.episodios;
    morteEl.textContent = p.morte;
    papelEl.textContent = p.papel;
    balao.style.display = "block";
    document.body.classList.add("modal-open");
  });
  galeria.appendChild(card);
});

fechar.addEventListener("click", () => {
  balao.style.display = "none";
  document.body.classList.remove("modal-open");
});