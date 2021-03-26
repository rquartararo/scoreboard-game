/// <reference types="cypress" />

describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })

  it('opens the app', () => {
    cy.visit('http://localhost:3000')
  })

  it('has title', function () {
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'The Most Boring Game Ever')
  })
})
