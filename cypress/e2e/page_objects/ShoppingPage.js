class ShoppingPage {
    clearQuantityInput() {
        cy.get("#quantity").clear();
    }

    setQuantity(quantity) {
        cy.get("#quantity").type(quantity);
    }

    clickAddToCartButton() {
        cy.get("div.product-details button").click();
    }

    clickViewCartLink() {
        cy.get("u").click();
    }
}

export default ShoppingPage;