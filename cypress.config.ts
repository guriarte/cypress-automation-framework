import { defineConfig } from 'cypress';

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'http://localhost:4200/',
    specPattern: '**/tests/**/*.spec.ts',
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
  },
});
