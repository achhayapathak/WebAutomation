const puppeteer = require('puppeteer');

async function runAutomation() {
    const browser = await puppeteer.launch({ headless: false }); // Launch a visible browser window
    const page = await browser.newPage();
    await page.goto('https://swap.defillama.com'); // Go to the website
    await new Promise(r => setTimeout(r, 3000));

    // Fill out the form

    // Select Chain
    await page.click('.css-1ewalef-control'); // Click on the dropdown control
    await new Promise(r => setTimeout(r, 2000));
    await page.waitForSelector('.css-ern9ru'); // Wait for the dropdown input to appear
    await page.focus('.css-ern9ru'); // Set focus on the dropdown input
    await page.keyboard.type('Arbitrum One'); // Type "Arbitrum One" to select it from the dropdown options
    await page.keyboard.press('Enter'); // Press the Enter key to confirm the selection
    await new Promise(r => setTimeout(r, 3000));


    // To clear the existing 10 value in "You Sell" text input
    await page.click('.css-79elbk input', {clickCount: 3})
    await new Promise(r => setTimeout(r, 1000));
    // To write 12 in "You Sell" text input
    await page.type('.css-79elbk input', '12')
    await new Promise(r => setTimeout(r, 3000));

    
    // Selecting WBTC in You Sell Menu
    await page.click('button.css-qjhap'); // Click the button to open the search bar
    await page.type('.chakra-text.css-sys4p8', 'WBTC'); // Type "WBTC" in the search bar
    await new Promise(r => setTimeout(r, 1000));
    await page.click(".jUxgJZ");
    await page.click(".cjxQGj");


}

runAutomation();
