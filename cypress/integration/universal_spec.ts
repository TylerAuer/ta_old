/// <reference types="cypress" />
import { EndpointJsonFile } from '../../src/types';

const endpoints = require('../fixtures/endpoints.json') as EndpointJsonFile;

context('Check features common to every page', async () => {
  endpoints.all.forEach((endpoint) => {
    describe(endpoint, () => {
      beforeEach(() => {
        cy.visit(endpoint);
      });

      it(`${endpoint} has SEO elements`, () => {
        cy.get('h1');
        cy.get('title').should('contain', 'Tyler Auer');
        cy.get('meta[name=description]').should('have.attr', 'content');
      });
    });
  });
});
