describe('Tests over /querys path', () => {
  beforeEach(() => {
    cy.task('cepCollection')
  })
  before(() => {
    this.fixtures = new Map<string, any>();
    [
      'queryValid',
      'queryInvalid',
      'queryTipoCepInvalid'
    ].forEach((fixtureName) => {
      cy.fixture(fixtureName).then((fixture) => {
        this.fixtures.set(fixtureName, fixture);
      });
    });
  })


  it('should save a valid CEP', () => {
    const queryValid = this.fixtures.get('queryValid')

    const requestOptions: Partial<Cypress.RequestOptions> = {
      method: 'POST',
      url: '/querys',
      body: <Cypress.RequestBody>queryValid,
      failOnStatusCode: false,
    }
    cy.request(requestOptions).then(({ body, status }) => {
      expect(status).to.equal(201)
      const { mensagem } = body
      expect(mensagem._id).to.equal('CEP cadastrado com sucesso')
    })
  })

  // it('should not save a CEP with invalid number', () => {
  //   const queryInvalid = this.fixtures.get('queryInvalid');

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'POST',
  //     url: '/querys',
  //     body: <Cypress.RequestBody>queryInvalid,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(404);
  //       const { mensagensDeErro }: { mensagensDeErro: string[] } = body;
  //       expect(mensagensDeErro.at(0)).to.equal('Número de CEP inválido');
  //     });
  // })
})