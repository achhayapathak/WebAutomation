const puppeteer = require('puppeteer');

async function runAutomation() {
    const browser = await puppeteer.launch({ headless: false }); // Launch a visible browser window
    const page = await browser.newPage();
    await page.goto('https://swap.defillama.com'); // Go to the website

    // Fill out the form

    
    // To clear the existing 10 value in "You Sell" text input
    await page.click('.css-79elbk input', {clickCount: 3})
    // To write 12 in "You Sell" text input
    await page.type('.css-79elbk input', '12')

}

runAutomation();
