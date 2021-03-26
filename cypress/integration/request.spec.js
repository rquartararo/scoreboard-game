/// <reference types="cypress" />

describe('Request', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays random users from API', () => {
    cy.request('https://jsonplaceholder.typicode.com/users').should(
      (response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      }
    )
  })
})
