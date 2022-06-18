const LoginPage = require('../pageobjects/login.page')

describe('Login page testing', () => {

    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    // it('Login succes', async () => {
    //     await LoginPage.login('standard_user', 'secrect_sauce')
    //     })
    describe('Username input test', () => {
        it('Empty username should display error', async () => {
            await LoginPage.login('', 'secrect_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
        })
        it('Invalid username', async () => {
            await LoginPage.login('invalid', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })
    })
    describe('Login with locked user', () => {
        it('Locked user', async () => {
            await LoginPage.login('locked_out_user', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        })
    })
    describe('Login with problem user', () => {
        it('Problem user', async () => {
            await LoginPage.login('problem_user', 'secret_sauce');
            await browser.setTimeout({ 'pageLoad': 10000 });
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Checking images content', async () => {
            const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
            await expect(imgSrc).toBe('/static/media/sl-404.168b1cce.jpg');
        })
    })
    describe('Login with glitch user', () => {
        it('Glitch user', async () => {
            await LoginPage.open();
            await LoginPage.login('performance_glitch_user', 'secret_sauce');
            await browser.setTimeout({ 'pageLoad': 10000 });
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
    })
    describe('Elementes to be displayed', () => {
        it('Verify botImg to be displayed', async () => {
            await LoginPage.open();
            await expect(LoginPage.botImg).toBeDisplayed();
        })
        it('Verify login logo to be displayed', async () => {
            await LoginPage.open();
            await expect(LoginPage.loginLogo).toBeDisplayed();
        })
    })
    describe('Checking img content on succes login', () => {
        it('Img content', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
            const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
            await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
        })
    })
})