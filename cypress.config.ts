import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200/",
    specPattern: "**/e2e/*.spec.ts",
    watchForFileChanges: false,
  },
});
