/// <reference types="cypress" />

describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has title', function () {
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'The Most Boring Game Ever')
  })

  it('focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
  })

  it('accepts input', () => {
    const text = 'Enter Name'
    cy.get('.form-control').type(text).should('have.value', text)
  })

  it('shows play game button', function () {
    cy.get('.button').should('be.visible').and('have.text', 'Play Game')
  })
})
