const {test} = require('@playwright/test');

test("Playwright test", async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com/");

});