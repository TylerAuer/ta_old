/// <reference types="cypress" />

const endpointFile = require('../fixtures/endpoints.txt');
console.log(endpointFile);
const endpoints = endpointFile.split('\n');

context('Visit every endpoint', async () => {
  endpoints.forEach((endpoint) => {
    it(`Loads ${endpoint}`, () => {
      cy.visit(endpoint);
    });
  });
});
