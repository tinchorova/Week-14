const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const ItemDescriptionPage = require('../pageobjects/itemDescription.page');

describe('Inventory page testing', () => {
    beforeEach('Login user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })
    describe('Testing individual item views', () =>{
        it('Testing backpack', async () =>{
            await InventoryPage.backpackImg.click();
            await expect(browser.url('https://www.saucedemo.com/inventory-item.html?id=4'));
            await InventoryPage.backpackAdd.click();
            await InventoryPage.backpackDelete.click();
            await ItemDescriptionPage.backpackImg.isDisplayed();
            await expect(ItemDescriptionPage.backpackTitle).toHaveText('Sauce Labs Backpack');
        })
        it('Testing bolt', async () =>{
            await InventoryPage.boltImg.click();
            await expect(browser.url('https://www.saucedemo.com/inventory-item.html?id=1'));
            await InventoryPage.boltAdd.click();
            await InventoryPage.boltDelete.click();
            await ItemDescriptionPage.boltImg.isDisplayed();
            await expect(ItemDescriptionPage.boltTitle).toHaveText('Sauce Labs Bolt T-Shirt')
        })
    })
    describe('Back to products button', () => {
        it('Testing back to products', async () => {
            await InventoryPage.backpackImg.click();
            await ItemDescriptionPage.backBtn.click();
        })
    })
})