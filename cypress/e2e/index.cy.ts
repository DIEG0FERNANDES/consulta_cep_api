describe('Testes sobre cadastro e consulta de códigos de endereçamento Postal', () => {
  before(() => {
    cy.task('truncateCollection');

    this.fixtures = new Map<string, any>();

    const fixturesNames: string[] = [
      'validCep',
      'invalidCep',
      'invalidLogradouro'
    ];

    fixturesNames.forEach((fixtureName) => {
      cy.fixture(fixtureName).then((fixture) => {
        this.fixtures.set(fixtureName, fixture);
      });
    });
  });

  it('deve salvar um CEP com dados válidos', () => {
    const validCep = this.fixtures.get('validCep');

    const requestOptions: Partial<Cypress.RequestOptions> = {
      method: 'POST',
      url: '/ceps',
      body: <Cypress.RequestBody>validCep,
      failOnStatusCode: false
    };

    cy.request(requestOptions)
      .then(({ body, status }) => {
        expect(status).to.equal(201);
        const { mensagem } = body;
        expect(mensagem).to.equal('CEP cadastrado com sucesso');
      });
  });
})