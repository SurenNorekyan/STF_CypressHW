import { cartPageLocators } from "./cartPageLocators";

class CartPage {
  elements = {
    checkoutSection: () => {
      return cy.get(cartPageLocators.checkoutSection);
    },
    cartEmpty: () => {
      return cy.get(cartPageLocators.cartEmpty);
    },
    clickHere: () => {
      return cy.get(cartPageLocators.clickHere);
    },
    addToCart: () => {
      return cy.get(cartPageLocators.addToCart);
    },
    descriptionInner: () => {
      return cy.get(cartPageLocators.descriptionInner);
    },
    productSku: () => {
      return cy.get(cartPageLocators.productSku);
    },
    creditFormButton: () => {
      return cy.get(cartPageLocators.creditFormButton);
    },
    buyNow: () => {
      return cy.get(cartPageLocators.buyNow);
    },
    cartProduct: () => {
      return cy.get(cartPageLocators.cartProduct);
    },
    priceExcludingTax: () => {
      return cy.get(cartPageLocators.priceExcludingTax);
    },
    itemCount: () => {
      return cy.get(cartPageLocators.itemCount);
    },
  };

  addToCart() {
    this.elements.addToCart().should("be.visible").click();
  }
}

export const cartPage = new CartPage();
