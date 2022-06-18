const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const loginPage = require('../pageobjects/login.page');

describe('Inventory page testing', () => {
    beforeEach('Login user', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    })

    describe('Testing hamburguer menu' () => {
        
    })
})