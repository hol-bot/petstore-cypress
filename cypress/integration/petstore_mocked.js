const timestamp = Date.now();    

describe('On petstore main page', function() {
  it('given we have 300 pets in store should display 300 pets', function() {
    cy.server()
    cy.route('GET', '/petstore/api/v1/pet/', 'fixture:pets_list.json').as('getPets');
    cy.visit('/petstore/')
    cy.get('.mat-table').find('mat-row').should('have.length', 300)
  })

  it('when we get http 500 from pet API front page is still served', function() {
    cy.server()
    cy.route({url: '/petstore/api/v1/pet/', method: 'GET', status: 500, response: '{"code": 500, "message": "Internal Server Error"}'}).as('getPets500');
    cy.visit('/petstore/')
    cy.wait('@getPets500')
  })
})


