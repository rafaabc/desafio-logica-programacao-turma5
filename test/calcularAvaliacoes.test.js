import {
  calcularQuantidadeDeAvaliacoes,
  calcularMediaDeAvaliacoes,
  avaliarFilmes,
  avaliarFilme,
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

  it("Deve retornar lista vazia de quantidades quando a lista de filmes é vazia", () => {
    const resultadoObtido = calcularQuantidadeDeAvaliacoes([]);
    assert.deepStrictEqual(resultadoObtido, []);
  });

  it("Deve retornar lista vazia de médias quando a lista de filmes é vazia", () => {
    const resultadoObtido = calcularMediaDeAvaliacoes([]);
    assert.deepStrictEqual(resultadoObtido, []);
  });

  it("Deve retornar lista vazia de avaliações quando a lista de médias é vazia", () => {
    const resultadoObtido = avaliarFilmes([]);
    assert.deepStrictEqual(resultadoObtido, []);
  });

  it("Deve retornar a quantidade de avaliações quando há apenas um filme avaliado", () => {
    const listaComUmFilme = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    ];
    const resultadoEsperado = [5];
    const resultadoObtido = calcularQuantidadeDeAvaliacoes(listaComUmFilme);
    assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
  });

  it("Deve retornar a média de avaliações quando há apenas um filme avaliado", () => {
    const listaComUmFilme = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    ];
    const resultadoEsperado = [4.4];
    const resultadoObtido = calcularMediaDeAvaliacoes(listaComUmFilme);
    assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
  });

  it("Deve retornar a avaliação quando há apenas um filme avaliado", () => {
    const listaComUmFilme = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    ];
    const medias = calcularMediaDeAvaliacoes(listaComUmFilme);
    const resultadoEsperado = ["Filme recomendado"];
    const resultadoObtido = avaliarFilmes(medias);
    assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
  });

  it("Deve retornar 'Filme ruim' quando a média é 2.99 (limite inferior da faixa razoável)", () => {
    assert.strictEqual(avaliarFilme(2.99), "Filme ruim");
  });

  it("Deve retornar 'Filme razoável' quando a média é 3 (limite exato da faixa razoável)", () => {
    assert.strictEqual(avaliarFilme(3), "Filme razoável");
  });

  it("Deve retornar 'Filme razoável' quando a média é 3.99 (limite superior da faixa razoável)", () => {
    assert.strictEqual(avaliarFilme(3.99), "Filme razoável");
  });

  it("Deve retornar 'Filme recomendado' quando a média é 4 (limite exato da faixa recomendada)", () => {
    assert.strictEqual(avaliarFilme(4), "Filme recomendado");
  });
});
