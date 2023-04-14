// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',  
  testMatch: '**spec.js',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  
  // retries: process.env.CI ? 2 : 0,

  // workers: process.env.CI ? 1 : undefined,

  reporter: [['html',{
    outputFile:'./test-results/report.html',
    open:'never'
  }],['allure-playwright']],

  projects: [
    {
      name : "chromium",  
      use: {          
       headless : true,
       screenshot: 'on'
      },
    },
    // baseURL: process.env.CI ? 'http://localhost:3001' : 'http://localhost:3000'
  ]
  };
  module.exports = config;
