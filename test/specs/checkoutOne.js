const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const CheckoutOnePage = require('../pageobjects/checkoutOne.page');

describe('CheckoutOne page testing', () => {
    beforeAll('Locate in checkout step one', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.lightAdd.click();
        await HeaderPage.btnCart.click();
        await CartPage.btnCheckout.click();
    })
    describe('Testing inputs', () => {
        it('Using empty inputs', async () => {
            await CheckoutOnePage.fillCheckout('','','');
            await CheckoutOnePage.btnContinue.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: First Name is required')
        })
        it('Using only firstName inputs', async () => {
            await CheckoutOnePage.fillCheckout('tincho','','');
            await CheckoutOnePage.btnContinue.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Last Name is required')
        })
        it('Using only Last Name inputs', async () => {
            await browser.refresh();
            await CheckoutOnePage.fillCheckout('','rova','');
            await CheckoutOnePage.btnContinue.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: First Name is required')
        })
        it('Using only First Name and Last Name inputs', async () => {
            await CheckoutOnePage.fillCheckout('tincho','rova','');
            await CheckoutOnePage.btnContinue.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Postal Code is required')
        })
        it('Using only valid inputs', async () => {
            await CheckoutOnePage.fillCheckout('tincho','rova','2000');
            await CheckoutOnePage.btnContinue.click();
            await expect(browser.url('https://www.saucedemo.com/checkout-step-two.html'))
        })
    })
    describe('Testing finish button', () => {
        it('Click finish button', async () => {
            await CheckoutOnePage.btnFinish.click();
            await expect(browser.url('https://www.saucedemo.com/checkout-complete.html'))
        })
    })
})