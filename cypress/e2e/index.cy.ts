let requestOptions: Partial<Cypress.RequestOptions> = {
  method: 'POST',
  url: '/querys',
  body: <Cypress.RequestBody>queryValid,,
  failOnStatusCode: false
}
describe('Tests about singup and query of cods from postal code', () => {
  it('should return welcome message', () => {
    cy.request({ method: 'GET', url: '/' }).then((response) => {
      const { body } = response
      expect(body).to.equal('Consulta CEP API')
    })
  })

  before(() => {
    this.fixtures = new Map<string, any>()
      ;[
        'queryInvalid',
        'queryTipoCepInvalid',
        'queryValid',
      ].forEach((name) => {
        cy.fixture(name).then((value) => {
          this.fixtures.set(name, value)
        })
      })
  })

  beforeEach(() => {
    cy.task('queryCollection')
  })

  it('should save a valid CEP', () => {
    requestOptions.body = this.fixtures.get('query')

    cy.request(requestOptions).then(({ body, status }) => {
      expect(status).to.equal(201)
      const { contact } = body
      expect(contact._id).to.not.null
    })
  })

  // it('não deve salvar um CEP com um número de CEP inválido', () => {
  //   const invalidCep = this.fixtures.get('invalidCep');

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'POST',
  //     url: '/ceps',
  //     body: <Cypress.RequestBody>invalidCep,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(400);
  //       const { mensagensDeErro }: { mensagensDeErro: string[] } = body;
  //       expect(mensagensDeErro.at(0)).to.equal('Número de CEP inválido');
  //     });
  // });

  // it('não deve salvar um CEP com um logradouro inválido', () => {
  //   const invalidLogradouro = this.fixtures.get('invalidLogradouro');

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'POST',
  //     url: '/ceps',
  //     body: <Cypress.RequestBody>invalidLogradouro,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(400);
  //       const { mensagensDeErro }: { mensagensDeErro: string[] } = body;
  //       expect(mensagensDeErro.at(0)).to.equal('Logradouro inválido');
  //     });
  // });

  // it('deve recuperar o logradouro de um CEP previamente cadastrado', () => {
  //   const cep = '79200-000';
  //   const expectedLogradouro = 'Aquidauana';

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'GET',
  //     url: `/ceps/busca/cep/${cep}`,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(200);
  //       const { endereco } = body;
  //       expect(endereco._id).to.not.null;
  //       expect(endereco.cep).to.equal(cep);
  //       expect(endereco.logradouro).to.equal(expectedLogradouro);
  //     });
  // });

  // it('deve retornar mensagem de não encontrado para um CEP não previamente cadastrado', () => {
  //   const cep = '79200-001';

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'GET',
  //     url: `/ceps/busca/cep/${cep}`,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(404);
  //       const { mensagem } = body;
  //       expect(mensagem).to.equal('Logradouro não encontrado');
  //     });
  // });

  // it('não deve recuperar o logradouro de um CEP com formato inválido', () => {
  //   const cep = '79200000';

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'GET',
  //     url: `/ceps/busca/cep/${cep}`,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(400);
  //       const { mensagem } = body;
  //       expect(mensagem).to.equal('CEP inválido');
  //     });
  // });

  // it('deve recuperar o CEP de um logradouro previamente cadastrado', () => {
  //   const logradouro = 'Aquidauana';
  //   const expectedCep = '79200-000';

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'GET',
  //     url: `/ceps/busca/logradouro/${logradouro}`,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(200);
  //       const { endereco } = body;
  //       expect(endereco._id).to.not.null;
  //       expect(endereco.cep).to.equal(expectedCep);
  //       expect(endereco.logradouro).to.equal(logradouro);
  //     });
  // });

  // it('deve retornar mensagem de não encontrado para um logradouro não previamente cadastrado', () => {
  //   const logradouro = 'Anastácio';

  //   const requestOptions: Partial<Cypress.RequestOptions> = {
  //     method: 'GET',
  //     url: `/ceps/busca/logradouro/${logradouro}`,
  //     failOnStatusCode: false
  //   };

  //   cy.request(requestOptions)
  //     .then(({ body, status }) => {
  //       expect(status).to.equal(404);
  //       const { mensagem } = body;
  //       expect(mensagem).to.equal('CEP não encontrado');
  //     });
  // });
})