const puppeteer = require('puppeteer');

async function runAutomation() {
    const browser = await puppeteer.launch({ headless: false }); // Launch a visible browser window
    const page = await browser.newPage();
    await page.goto('https://swap.defillama.com'); // Go to the website


    browser.close();
}

runAutomation();
