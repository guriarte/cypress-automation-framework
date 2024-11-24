import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200/',
    specPattern: '**/tests/*/*.spec.ts',
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
  },
});
