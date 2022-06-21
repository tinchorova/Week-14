const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const CheckoutOnePage = require('../pageobjects/checkoutOne.page');
const CompleteOrderPage = require('../pageobjects/completeOrder.page');

describe('Complete order tests', () => {
    beforeAll('Locate in complete order page', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HeaderPage.btnCart.click();
        await CartPage.btnCheckout.click();
        await CheckoutOnePage.fillCheckout('tincho','rova','2000');
        await CheckoutOnePage.btnContinue.click();
        await CheckoutOnePage.btnFinish.click();
    })
    describe('Verifying title is shown and correct', () => {
        it('Title is displayed', async () => {
            await CompleteOrderPage.thankYouTitle.isDisplayed();
        })
        it('Title is correct', async () => {
            await expect(CompleteOrderPage.thankYouTitle).toHaveText('THANK YOU FOR YOUR ORDER')
        })
    })
    describe('Pony image should be displayed', () => {
        it('Pony image displayed', async () => {
            await CompleteOrderPage.ponyImg.isDisplayed();
        })
    })
    describe('Back home button', () => {
        it('Button exists', async () =>{
            await expect(CompleteOrderPage.btnBackHome).toExist();
        })
        it('Clicking button', async () =>{
            await CompleteOrderPage.btnBackHome.click();
            await expect(browser.url('https://www.saucedemo.com/inventory.html'));
        })
    })
})