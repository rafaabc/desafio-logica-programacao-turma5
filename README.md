# Aula 08 M2

> Suite de testes unitários para um módulo de cálculo de avaliações de filmes, feita com Node.js e Mocha.

## Descrição

Este projeto implementa e testa um módulo responsável por calcular avaliações de filmes com base nas notas dos usuários. Ele calcula a quantidade de avaliações por filme, a média das notas e classifica cada filme como "Filme recomendado", "Filme razoável" ou "Filme ruim" de acordo com essa média. Os testes são escritos com Mocha e o módulo nativo `assert` do Node, seguindo o padrão Arrange-Act-Assert.

## Dependências

- Node.js (com suporte nativo a ES Modules)

Não é necessário ter nenhum serviço ou aplicação externa em execução para rodar este projeto.

## Tecnologias Utilizadas

- **Node.js** – runtime, usando ES Modules nativo (`type: module`)
- **Mocha** `^12.0.3` – executor de testes
- **node:assert** – biblioteca nativa de asserções

## Instalação e Configuração

1. Clone o repositório:
   ```
   git clone https://github.com/rafaabc/aula-08-m2.git
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute os testes:
   ```
   npm test
   ```

## Funcionalidades

- `calcularQuantidadeDeAvaliacoes` – retorna a quantidade de avaliações de cada filme da lista
- `calcularMediaDeAvaliacoes` – retorna a média das notas de cada filme da lista
- `avaliarFilme` – classifica uma média como "Filme recomendado" (>= 4), "Filme razoável" (3 a 3.99) ou "Filme ruim" (< 3)
- `avaliarFilmes` – aplica `avaliarFilme` a uma lista de médias

A cobertura de testes inclui:
- Cálculos padrão com vários filmes
- Tratamento de lista vazia
- Lista com apenas um filme
- Valores de fronteira entre as classificações (2.99, 3, 3.99, 4)

## Estrutura de Arquivos

```
aula-08-m2/
│
├── src/
│   └── calcularAvaliacoes.js       # Lógica de cálculo e classificação das avaliações
│
├── test/
│   └── calcularAvaliacoes.test.js  # Suite de testes Mocha
│
├── package.json                    # Dependências e scripts do projeto
├── package-lock.json
└── .gitignore
```

## Autor

Rafael Albuquerque
