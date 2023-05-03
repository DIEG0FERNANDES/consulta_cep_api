# refactored-contact-book-api

## Sumário

- [refactored-contact-book-api](#refactored-contact-book-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste em uma refatoração do repositório de código [contact-book-api](https://github.com/mdccg/contact-book-api), que por sua vez consiste em uma API de uma agenda telefônica.

Eis a descrição do repositório de código supracitado:

> A agenda armazena o nome, o endereço de e-mail, o número de telefone e a data de nascimento de um contato; sendo facultativo apenas o endereço de e-mail. O arquivo `contact-book-api-requests.postman_collection.json`, presente no diretório `docs/`, é uma coleção de requisições e testes de API solicitada para a primeira atividade avaliativa da unidade curricular. A coleção contém quatro requisições para salvar novos contatos com diferentes tipos de erros de validação. Cada requisição contém um script de teste que garante que a resposta da API corresponda ao resultado esperado para o erro de validação fornecido. [&hellip;]

Neste repositório de código, há apenas testes de ponta a ponta e estão disponíveis no diretório [`e2e/`](./cypress/e2e/).

Este foi o terceiro repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/contact-book-api) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Back-end | [Express.js](https://expressjs.com/pt-br/) |
| Framework de teste | ~~[Postman](https://www.postman.com/)~~ [Cypress](https://www.cypress.io/) |
| Virtualização de banco de dados | [Docker](https://www.docker.com/) |
| Banco de dados | [MongoDB](https://www.mongodb.com/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_ Docker com o respectivo banco de dados virtualizado. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

Mas, não se preocupe. As tuplas inseridas no banco de dados não serão deletadas com a derrubada do _container_.

5. Execute o seguinte comando para iniciar a API:

Para npm:

```console
$ npm run dev
```

Para Yarn:

```console
$ yarn dev
```

6. Por fim, execute o seguinte comando para testar a API iniciada:

Para npm:

```console
$ npm run test
```

Para Yarn:

```console
$ yarn test
```