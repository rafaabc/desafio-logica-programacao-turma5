const listaDeFilmesEAvaliacoes = [
  { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] },
];

export function calcularQuantidadeDeAvaliacoes(listaDeFilmesEAvaliacoes) {
  let listaComQuantidadeDeAvaliacoes = [];

  for (let i = 0; i < listaDeFilmesEAvaliacoes.length; i++) {
    let quantidadeDeAvaliacoes = listaDeFilmesEAvaliacoes[i].avaliacoes.length;
    listaComQuantidadeDeAvaliacoes.push(quantidadeDeAvaliacoes);
  }

  return listaComQuantidadeDeAvaliacoes;
}

export function calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes) {
  let listaComQuantidadeDeMedias = [];

  for (let i = 0; i < listaDeFilmesEAvaliacoes.length; i++) {
    let somaDasAvaliacoes = 0;
    for (let j = 0; j < listaDeFilmesEAvaliacoes[i].avaliacoes.length; j++) {
      somaDasAvaliacoes += listaDeFilmesEAvaliacoes[i].avaliacoes[j];
    }
    let media =
      somaDasAvaliacoes / listaDeFilmesEAvaliacoes[i].avaliacoes.length;
    listaComQuantidadeDeMedias.push(media);
  }
  return listaComQuantidadeDeMedias;
}

export function avaliarFilme(media) {
  if (media >= 4) {
    return "Filme recomendado";
  } else if (media < 3) {
    return "Filme ruim";
  } else {
    return "Filme razoável";
  }
}

export function avaliarFilmes(medias) {
  let listaDeAvaliacoes = [];
  for (let i = 0; i < medias.length; i++) {
    listaDeAvaliacoes.push(avaliarFilme(medias[i]));
  }
  return listaDeAvaliacoes;
}

console.log(calcularQuantidadeDeAvaliacoes(listaDeFilmesEAvaliacoes));
console.log("---------------------------");
const medias = calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes);
console.log(medias);
console.log("---------------------------");
console.log(avaliarFilmes(medias));
