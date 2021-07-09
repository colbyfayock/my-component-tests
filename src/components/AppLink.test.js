import { mount } from '@cypress/react'
import AppLink from './AppLink'

describe('AppLink', () => {
  it('should be visually perfect', () => {
    mount(<AppLink href="https://applitools.com">Testing my AppLink component!</AppLink>);
    cy.eyesOpen({ testName: 'AppLink' });
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});