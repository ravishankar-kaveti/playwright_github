const {test} = require('@playwright/test');

test("Playwright test", async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com/");
    console.log(await page.getByTitle());
    await page.locator('#id').type("hello");

    


});