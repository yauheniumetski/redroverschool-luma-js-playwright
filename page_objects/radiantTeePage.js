class RadiantTeePage {
    constructor(page) {
        this.page = page;
    }

    locators = {

        getRadiantTeeSizeS: () => this.page.getByText('S', { exact: true }),
        getRadiantTeeSizeM: () => this.page.getByText('M', { exact: true }),
        getRadiantTeeColorBlue: () => this.page.getByRole('option', { name: "Blue" }),
        getAddToCartBtn: () => this.page.getByRole('button', { name: "Add to Cart" })       
    }

    async clickRadiantTeeSizeS() {
        await this.locators.getRadiantTeeSizeS().click();

        return this.page;
    }

    async clickRadiantTeeSizeM() {
        await this.locators.getRadiantTeeSizeM().click();

        return this.page;
    }

    async clickRadiantTeeColorBlue() {
        await this.locators.getRadiantTeeColorBlue().click();

        return this.page;
    }

    async clickAddToCartBtn() {
        await this.locators.getAddToCartBtn().click();

        return this.page;
    }

}
export default RadiantTeePage