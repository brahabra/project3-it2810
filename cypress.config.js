const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/project3",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
});