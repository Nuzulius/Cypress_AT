const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "p6m9e1",
  defaultCommandTimeout: 8000,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
