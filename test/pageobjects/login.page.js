class LoginPage {
    //Gettes
    get inputUsername() { return $('#user-name')}
    get inputPassword () { return $('#password')}
    get btnLogin() { return $('#login-button')}
    get errorContainer() { return $('.error-message-container.error')}
    get botImg() { return $('.bot_column')}
    get loginLogo() { return $('.login_logo')}
    //Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }
    //Methods
    async login (username, password) {
        await this.setUsername(username),
        await this.setPassword(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage()