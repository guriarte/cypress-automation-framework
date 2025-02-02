import { LoginPage } from '../../../support/pages/page_objects/loginPage';
import userCredentials from '../../../fixtures/userCredentials.json';
import assert from '../../../support/pages/pageAssertions';
import { loginMocks } from '../../../support/mocks/loginMocks';

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

  it('Should handle server error with correct message', () => {
    loginMocks.interceptServerError();
    loginPage.loginUI('customer@domain.com', 'somePassword');
    assert.elementContainingTextIsVisible('Login failed');
  });
});
