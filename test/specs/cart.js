const CartPage = require('../pageobjects/cart.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');

describe('Cart page testing', () => {
    beforeEach('Login user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
    describe('Testing items on cart', () => {
        it('Add two items to cart to verify its existence in cart', async () => {
            await InventoryPage.backpackAdd.click();
            await InventoryPage.jacketAdd.click();
            await HeaderPage.btnCart.click();
            await expect(CartPage.cartList).toHaveChildren(4);
            //expecting 2 elements added to cart + 2 divs already existing (descrip, qty)
        })
        it('Testing remove items', async () => {
            await HeaderPage.btnCart.click();
            await CartPage.btnRemoveBackpack.click();
            await CartPage.btnRemoveJacket.click();
        })
    })
    describe('Testing continue shopping and checkout buttons', () => {
        it('Testing Continue Shopping with items in cart', async () => {
            await HeaderPage.btnCart.click();
            await CartPage.btnContinueShopping.click();
            await expect(browser.url('https://www.saucedemo.com/inventory.html/'));
        })
        it('Testing Checkout Button with 2 items', async () => {
            await InventoryPage.open()
            // await browser.pause(4000);
            await InventoryPage.jacketAdd.click();
            await InventoryPage.lightAdd.click();
            await HeaderPage.btnCart.click();
            await CartPage.btnCheckout.click();
            await expect(browser.url('https://www.saucedemo.com/checkout-step-one.html'))
        })
    })
    describe('Cleaning cart', () => {
            it('Remove items for the next test', async () => {
                await HeaderPage.btnCart.click();
                await CartPage.btnRemoveLight.click();
                await CartPage.btnRemoveJacket.click();
            })
    })
})