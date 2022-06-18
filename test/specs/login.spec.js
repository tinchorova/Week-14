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
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        })
    })
    describe('Elementes to be displayed', () => {
        it('Verify botImg to be displayed', async () => {
            await expect(LoginPage.botImg).toBeDisplayed()
        })
        it('Verify login logo', async () => {
            await expect(LoginPage.botImg).toBeDisplayed()
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