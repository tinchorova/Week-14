class ItemDescriptionPage {
    get checkoutBtn () { return $('#checkout')};
    get backBtn () { return $('#back-to-products')}
    get backpackImg () { return $('.inventory_details_img_container')}
    get backpackTitle () { return $('.inventory_details_name.large_size')}

    get backBtn () { return $('#back-to-products')}

    get boltImg () { return $('#inventory_item_container > div > div > div.inventory_details_img_container > img')}
    get boltTitle () { return $('.inventory_details_name.large_size')}
}

module.exports = new ItemDescriptionPage();