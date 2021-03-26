/// <reference types="cypress" />

describe('Leaderboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays list of payers and scores', () => {
    cy.get('.card-container').should('be.visible')
  })
})
