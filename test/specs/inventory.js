const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');

describe('Inventory page testing', () => {
    beforeEach('Login user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    })

    describe('Testing hamburguer menu', () => {
        beforeEach('Redirect to inventory', () => {
            browser.url('https://www.saucedemo.com/inventory.html')
        })
        it('Test about', async () => {
            await HeaderPage.burgerBtn.click();
            await expect(HeaderPage.aboutSidebar).toExist();
            await HeaderPage.aboutSidebar.click();
            await expect(browser.url('https://saucelabs.com/'))
        })
        it('Test cross button', async () => {
            await HeaderPage.burgerBtn.click();
            await expect(HeaderPage.crossBtn).toExist();
            await HeaderPage.crossBtn.click();
        })
    })
    describe('Testing Backpack', () => {
        it('Backpack title display', async () => {
            await InventoryPage.open();
            await expect(InventoryPage.backpackTitle).toHaveText('Sauce Labs Backpack');
        })
        it('Backpack image display', async () => {
            await InventoryPage.open();
            await $('#item_4_img_link').isDisplayed();

        })
        it('Backpack Add to cart', async () => {
            await InventoryPage.open();
            await InventoryPage.backpackAdd.click();
        })
        it('Backpack remove from cart', async () => {
            await InventoryPage.open();
            await InventoryPage.backpackDelete.click();
        })
    })
    describe('Testing Bike Light', () => {
        it('Bike Light title display', async () => {
            await InventoryPage.open();
            await expect(InventoryPage.lightTitle).toHaveText('Sauce Labs Bike Light');
        })
        it('Bike Light add to cart', async () => {
            await InventoryPage.open();
            await InventoryPage.lightAdd.click();
        })
        it('Bike Light remove from cart', async () => {
            await InventoryPage.open();
            await InventoryPage.lightDelete.click();
        })
        it('Bike light image display', async () => {
            await InventoryPage.open();
            await $('#item_0_img_link').isDisplayed();
        })
    })
    describe('Testing Onesie', () => {
        it('Onesie title display', async () => {
            await InventoryPage.open();
            await expect(InventoryPage.onesieTitle).toHaveText('Sauce Labs Onesie');
        })
        it('Onesie add to cart', async () => {
            await InventoryPage.open();
            await InventoryPage.onesieAdd.click();
        })
        it('Onesie remove from cart', async () => {
            await InventoryPage.open();
            await InventoryPage.onesieDelete.click();
        })
        it('Onesie image display', async () => {
            await InventoryPage.open();
            await $('#item_2_img_link > img').isDisplayed();
        })
    })
    describe('Testing redTshirt', () => {
        it('redTshirt title display', async () => {
            await InventoryPage.open();
            await expect(InventoryPage.redTshirtTitle).toHaveText('Test.allTheThings() T-Shirt (Red)');
        })
        it('redTshirt add to cart', async () => {
            await InventoryPage.open();
            await InventoryPage.redTshirtAdd.click();
        })
        it('redTshirt remove from cart', async () => {
            await InventoryPage.open();
            await InventoryPage.redTshirtDelete.click();
        })
        it('redTshirt image display', async () => {
            await InventoryPage.open();
            await $('#item_3_img_link > img').isDisplayed();
        })
    })
    describe('Testing shopping cart', () => {
        it('Adding bolt to cart', async () => {
            await InventoryPage.open();
            await InventoryPage.boltAdd.click();
        })
        it('Removing bolt from cart', async () => {
            await InventoryPage.open();
            await InventoryPage.boltDelete.click();
        })
    })
    describe('Testing social media links', () => {
        it('Testing Twitter', async () => {
            await expect(InventoryPage.twitterLink).not.toBeDisplayed
            await InventoryPage.twitterLink.click();
        })
    })
})