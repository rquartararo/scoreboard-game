/// <reference types="cypress" />

describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('accepts input', () => {
    cy.get('.input').should('be.visible')
  })

  it('shows play game button', function () {
    cy.get('.button').should('be.visible').and('have.text', 'Play Game')
  })
})
