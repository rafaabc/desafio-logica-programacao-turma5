import {
  calcularQuantidadeDeAvaliacoes,
  calcularMediaDeAvaliacoes,
  avaliarFilmes,
} from "../src/calcularAvaliacoes.js";
import assert from "node:assert";

const listaDeFilmesEAvaliacoes = [
  { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] },
];

describe("Testando o módulo de calcular Avaliações", () => {
  it("Deve retornar a quantidade de avaliações de cada filme", () => {
    const resultadoEsperado = [5, 5, 3];
    const resultadoObtido = calcularQuantidadeDeAvaliacoes(
      listaDeFilmesEAvaliacoes,
    );
    assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
  });
  it("Deve retornar a média de avaliações de cada filme", () => {
    const resultadoEsperado = [4.4, 3.2, 2];
    const resultadoObtido = calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes);
    assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
  });
    it("Deve retornar a avaliação de cada filme", () => {
      const medias = calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes);
      const resultadoEsperado = ["Filme recomendado", "Filme razoável", "Filme ruim"];
      const resultadoObtido = avaliarFilmes(medias);
      assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });
});
