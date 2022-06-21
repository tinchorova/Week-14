class CompleteOrderPage {
    get btnBackHome () { return $('#back-to-products')}
    get ponyImg () { return $('#checkout_complete_container')}
    get thankYouTitle () { return $('#checkout_complete_container > h2')}
}

module.exports = new CompleteOrderPage();