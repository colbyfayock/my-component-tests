import { mount } from '@cypress/react'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('should be visually perfect', () => {
    mount(<AppHeader />);
    cy.eyesOpen({ testName: 'AppHeader' });
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
})