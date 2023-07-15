const puppeteer = require('puppeteer');

async function runAutomation() {
    const browser = await puppeteer.launch({ headless: false }); // Launch a visible browser window
    const page = await browser.newPage();
    await page.goto('https://swap.defillama.com'); // Go to the website

    // Fill out the form

    // Select Chain
    await page.click('.css-1ewalef-control'); // Click on the dropdown control
    await page.waitForSelector('.css-ern9ru'); // Wait for the dropdown input to appear
    await page.focus('.css-ern9ru'); // Set focus on the dropdown input
    await page.keyboard.type('Arbitrum One'); // Type "Arbitrum One" to select it from the dropdown options
    await page.keyboard.press('Enter'); // Press the Enter key to confirm the selection

    
    // To clear the existing 10 value in "You Sell" text input
    await page.click('.css-79elbk input', {clickCount: 3})
    // To write 12 in "You Sell" text input
    await page.type('.css-79elbk input', '12')

}

runAutomation();
