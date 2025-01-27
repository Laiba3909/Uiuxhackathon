import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Base URL for your live app hosted on Vercel
    baseUrl: 'https://uiuxhackathon-two.vercel.app',  // Your Vercel URL

    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});


