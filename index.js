const puppeteer = require('puppeteer');

async function runAutomation() {
  try {
    const browser = await puppeteer.launch({ headless: false }); // Launch a visible browser window
    const page = await browser.newPage(); // Open a new page
    await page.setViewport({ width: 1366, height: 768 }); // Set page size
    await page.goto('https://swap.defillama.com'); // Go to the website
    
    // Fill out the form
    await selectChain(page);
    await fillAmount(page);

    // Selecting USDC first then swapping it from "You sell" to "You buy"
    await selectToken(page, 'USD Coin', 1); // Second element of dropdown after performing search
    await performSwap(page);
    await selectToken(page, 'WBTC', 0); // First element of dropdown after performing search

    // Select the second route after filling up the form
    await selectSecondRoute(page);
    
    // Do not close the browser to leave it open
    
} catch (error) {
    console.error('An error occurred:', error);
}
}

async function selectChain(page) {
  await page.waitForTimeout(3000);
  await page.click('.css-1ewalef-control'); // Click on the dropdown control
  await page.waitForTimeout(1000);
  await page.waitForSelector('.css-ern9ru'); // Wait for the dropdown input to appear
  await page.focus('.css-ern9ru'); // Set focus on the dropdown input
  await page.keyboard.type('Arbitrum'); // Type "Arbitrum One" to select it from the dropdown options
  await page.keyboard.press('Enter'); // Press the Enter key to confirm the selection
}

async function fillAmount(page) {
  await page.waitForTimeout(2000);
  await page.click('.css-79elbk input', { clickCount: 3 }); // Clear the existing value in "You Sell" text input
  await page.waitForTimeout(1000);
  await page.type('.css-79elbk input', '12'); // Enter "12" in "You Sell" text input
}

async function selectToken(page, tokenName, index) {
  await page.waitForTimeout(2000);
  await page.click('button.css-qjhap'); // Click the button to open the search bar
  await page.type('.chakra-text.css-sys4p8', tokenName); // Type the token name in the search bar
  await page.waitForTimeout(1000);
  const options = await page.$$('.cjxQGj'); // Select all options
  await options[index].click(); // Select the desired option from the dropdown
}

async function performSwap(page) {
  await page.waitForTimeout(2000);
  await page.click('.css-v1p1bl'); // Perform the swap to change to "You Buy" menu
}

async function selectSecondRoute(page) {
  await page.waitForTimeout(15000);
  await page.waitForSelector('.RouteWrapper');
  const routes = await page.$$('.RouteWrapper'); // Storing all the routes
  await routes[1].click(); // Select the second option from the right menu
}

runAutomation();
