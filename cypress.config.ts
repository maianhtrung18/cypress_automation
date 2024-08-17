import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://raksul.github.io/recruit-qa-engineer-work-sample/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 15000,
  },
  scrollBehavior: "nearest",
});
