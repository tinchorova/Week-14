class InventoryPage {
    get backpackImg () { return $('#item_4_img_link') }
    get backpackTitle () { return $('#item_4_title_link') }
    get backpackAdd () { return $('#add-to-cart-sauce-labs-backpack') }
    get backpackDelete () { return $('#remove-sauce-labs-backpack') }

    get lightImg () { return $('#item_0_img_link') }
    get lightTitle () { return $('#item_0_title_link') }
    get lightAdd () { return $('#add-to-cart-sauce-labs-bike-light') }
    get lightDelete () { return $('#remove-sauce-labs-bike-light') }

    get boltImg () { return $('#item_1_img_link') }
    get boltTitle () { return $('#item_1_title_link') }
    get boltAdd () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get boltDelete () { return $('#remove-sauce-labs-bolt-t-shirt') }

    get jacketImg () { return $('#item_5_img_link') }
    get jacketTitle () { return $('#item_5_title_link') }
    get jacketAdd () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get jacketDelete () { return $('#remove-sauce-labs-fleece-jacket') }

    get onesieImg () { return $('#item_2_img_link') }
    get onesieTitle () { return $('#item_2_title_link') }
    get onesieAdd () { return $('#add-to-cart-sauce-labs-onesie') }
    get onesieDelete () { return $('#remove-sauce-labs-onesie') }

    get redTshirtImg () { return $('#item_3_img_link') }
    get redTshirtTitle () { return $('#item_3_title_link') }
    get redTshirtAdd () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]') }
    get redTshirtDelete () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') }

    get twitterLink () { return $('li.social_twitter')}
    get facebooLink () { return $('.social_facebook')}
    get linkedinLink () { return $('.social_linkedin')}

    get burguerMenu () { return $('#react-burger-menu-btn')}


    get appLogo () { return $('.header_label') }

    get sortBtn () { return }


    //Methods
    open () {
        return browser.url('https://www.saucedemo.com/inventory.html')
    }
    async addAllProducts () {
        // await this.backpackAdd.click();
        await this.lightAdd.click();
        await this.boltAdd.click();
        // await this.jacketAdd.click();
        await this.onsieAdd.click();
        // await this.redTshirtAdd.click();
    }
    async removeAllProducts () {
        await this.backpackDelete.click();
        await this.lightDelete.click();
        await this.boltDelete.click();
        await this.jacketDelete.click();
        await this.onesieDelete.click();
        await this.redTshirtDelete.click();
    }
}

module.exports = new InventoryPage();