import { mount } from '@cypress/react'
import AppLogo from './AppLogo'

describe('AppLogo', () => {
  it('should be visually perfect', () => {
    mount(<AppLogo />);
    cy.eyesOpen({ testName: 'AppLogo' });
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
})