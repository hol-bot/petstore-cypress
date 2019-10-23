const timestamp = Date.now();  

describe("On pet's detail view", function() {

  // TO-DO programatically set state
  it('should be possible to cancel editing', function() {
    cy.request('POST', '/petstore/api/v1/pet/', {"name":  JSON.stringify(timestamp),"petType":"Fish","birthDate":"2019-10-22T21:00:00.000Z"})
      .then((response) => {
        expect(response.body).to.have.property("name", JSON.stringify(timestamp))
      })
  })

  // TO-DO mock the state
  it('should be possible to cancel editing #2', function() {
  })

})


