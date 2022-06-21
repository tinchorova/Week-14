class HeaderPage {
    get burgerBtn () { return $('#react-burger-menu-btn')};
    get headerLogo () { return $('.header_label')};
    get productSort () { return $('.product_sort_container')};
    get shoppingCart () { return $('#shopping_cart_container')};
    get aboutSidebar () { return $('#about_sidebar_link')};
    get crossBtn () { return $('#react-burger-cross-btn')}

    get filter () { return $('#header_container > div.header_secondary_container > div.right_component > span')}
    get btnCart () { return $('#shopping_cart_container')}
}

module.exports = new HeaderPage();