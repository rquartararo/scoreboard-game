/// <reference types="cypress" />

describe('Request', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('gets all players from API', () => {
    cy.request('getplayers').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
