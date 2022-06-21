const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const CompleteOrderPage = require('../pageobjects/completeOrder.page');

describe('Complete order tests', () => {
    beforeAll('Locate in complete order page', () =>{
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
            await CompleteOrderPage.thankYouTitle.toBeDisplayed();
        })
        it('Title is correct', async () => {
            await CompleteOrderPage.thankYouTitle.toHaveText('THANK YOU FOR YOUR ORDER')
        })
    })
    describe('Pony image should be displayed', () => {
        await CompleteOrderPage.ponyImg.toBeDisplayed();
    })
    describe('Back home button', () => {
        it('Button is clickable', async () =>{
            await CompleteOrderPage.btnBackHome.toExist()
            await expect(CompleteOrderPage.btnBackHome).isClickable()
        })
        it('Clicking button', async () =>{
            await CompleteOrderPage.btnBackHome.click();
            await expect(browser.url('https://www.saucedemo.com/inventory.html'));
        })
    })
})