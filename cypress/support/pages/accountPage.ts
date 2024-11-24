export const AccountPage = () => {
  const selectors = {
    profileButton: '[data-test="nav-profile"]',
  };

  const pageActions = {
    clickProfileButton: () => {
      cy.get(selectors.profileButton).click();
      return pageActions;
    },
  };

  const gettersAndSetters = {
    getProfileButton: () => {
      return selectors.profileButton;
    },
  };

  return { selectors, pageActions };
};
