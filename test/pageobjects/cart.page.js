class CartPage {
    get checkoutBtn () { return $('#checkout')};
    get continueShoppingBtn () { return $('#continue-shopping')}
    get cartList () { return $('.cart_list')}
    get cartItem () { return $('#cart_contents_container > div > div.cart_list > div.cart_item')}
    get btnRemoveBolt () { return $('#remove-sauce-labs-bolt-t-shirt')}
    get btnRemoveOnesie () { return $('#remove-sauce-labs-onesie')}
    get btnRemoveBackpack () { return $('#remove-sauce-labs-backpack')}
    get btnRemoveJacket () { return $('#remove-sauce-labs-fleece-jacket')}
    get btnRemoveLight () { return $('#remove-sauce-labs-bike-light')}
    get btnContinueShopping () { return $('#continue-shopping')}
    get btnCheckout () { return $('#checkout')}

}

module.exports = new CartPage();