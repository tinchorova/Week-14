class CheckoutOnePage {
    get btnContinue () { return $('#continue')}
    get btnCancel () { return $('#cancel')}
    get btnError () { return $('#error-button')}
    get errorContainer () { return $('.error-message-container.error')}
    get firstNameInput () { return $('#first-name')}
    get lastNameInput () { return $('#last-name')}
    get postalCodeInput () { return $('#postal-code')}

    get btnFinish () { return $('#finish')}


    async fillCheckout (firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }
}

module.exports = new CheckoutOnePage();