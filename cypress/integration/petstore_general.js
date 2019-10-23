const timestamp = Date.now();  
const randomNumber = Math.round(Math.random() * 10000000);

describe('On petstore main page', function() {
  it('should be possible to add a pet to the petstore', function() {
    cy.visit('http://africa.nortal.com/petstore/')
    cy.contains('add').click()
    cy.get('[name=name]').type(timestamp).should('include.value',timestamp)
    cy.get('[ng-reflect-name=petType]').click()
    cy.contains('Fish').click()
    cy.get('.mat-datepicker-toggle').click()
    // clicks on default date displayed on calendar
    cy.focused().click()
    cy.get('span:contains(Add)').click()
    // verify that the added pet can be found
    cy.contains(timestamp).click()
  })

  it('should be possible to edit a pet and return to home page', function() {
    cy.visit('http://africa.nortal.com/petstore/')
    // picks a first pet
    cy.contains('edit').click()
    cy.get('[name=name]').clear().type(randomNumber).should('include.value',randomNumber)
    cy.get('span:contains(Update)').click()
    cy.contains(randomNumber)
    cy.get('span:contains(Home)').click()
  })

  it('it should not be possible to add a pet to the petstore without name & birthdate', function() {
    cy.visit('http://africa.nortal.com/petstore/')
    cy.contains('add').click()
    cy.get('[name=name]').clear().should('have.css', 'caret-color').and('equal', 'rgb(63, 81, 181)');
    cy.get('[ng-reflect-name=petType]').click()
    cy.contains('Fish').click()
    cy.get('[formcontrolname=birthDate]').clear().should('have.css', 'caret-color').and('equal', 'rgb(63, 81, 181)');
    // Check that adding does not succeed
    cy.get('span:contains(Add)').click()
    // Check that no redirect happened after clicking Add
    cy.wait(2000)
    cy.url().should('not.eq',"http://africa.nortal.com/petstore/") 
  })

  // TO-DO
  it('should be possible to delete a pet', function() {
  })

})


