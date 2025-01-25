import { LoginPage } from '../../../support/pages/loginPage';
import userCredentials from '../../../fixtures/userCredentials.json';
import assert from '../../../support/assertions/pageAssertions';

const { pageActions: loginPage } = LoginPage();
const customerUserEmail = userCredentials.customerUser.email;
const customerUserPassword = Cypress.env('CUSTOMERUSER_PASSWORD');

describe('Login Integration Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });
  it('Should log in as a customer with valid credentials', () => {
    loginPage.loginUI(customerUserEmail, customerUserPassword);
    assert.urlShouldContainText('/account');
  });

  it('Should display error messages when no email or password is entered', () => {
    loginPage.clickSubmitButton();
    assert.elementContainingTextIsVisible('Email is required');
    assert.elementContainingTextIsVisible('Password is required');
  });

  it('Should display error messages when email or password are invalid', () => {
    loginPage.loginUI('fakeemail@gmail.com', 'fakepassword');
    assert.elementContainingTextIsVisible('Invalid email or password');
  });
});
