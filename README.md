# Puppeteer Automation

This project demonstrates basic automation using Puppeteer library to perform user actions on a website.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Description

The task involves automating user actions on the [swap.defillama.com](https://swap.defillama.com) website using Puppeteer library. The program launches a headful browser, fills out a form on the website, and performs various actions using Puppeteer.

## Prerequisites

To run this program, you need to have the following software installed:

- Node.js (version 10 or above)

## Installation

1. Clone the repository from GitHub:

    ```bash
    git clone https://github.com/achhayapathak/WebAutomation.git
    ```


2. Install the project dependencies:

    ```bash
    cd puppeteer-automation
    npm install
    ```


## Usage

1. Run the program using the following command:

    ```bash
    node index.js
    ```

2. The program will launch a browser window and perform the following actions:

- Go to [swap.defillama.com](https://swap.defillama.com)
- Fill out the form on the website:
  - Enter "Arbitrum One" in the "Chain" field
  - Enter "12" in the "You Sell" field
  - Enter "WBTC" (Wrapped BTC) in the "Select Token" field on the right-hand side of the "You Sell" field
  - Enter "USDC" (USDC Coin) in the "Select Token" field in the "You Buy" section
- Once the data is entered, a section titled "Select a route to perform a swap" will appear on the right-hand side
- The program will select the second option in this section
- The browser window will remain open until you manually close it

3. You can observe the automated actions in the browser window.

## Contact

For any further questions or issues, please contact me at [achhayapathak11@gmail.com](mailto:achhayapathak11@gmail.com).
