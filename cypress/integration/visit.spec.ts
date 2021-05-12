/// <reference types="cypress" />

context('Simple demo tests to set up API', () => {
  it('Can visit the homepage', () => {
    cy.visit('/');
  });
});
