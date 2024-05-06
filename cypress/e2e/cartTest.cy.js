import { searchHeader } from "../POM/searchHeader/searchHeader";
import { cartPage } from "../POM/cartPage/cartPage";
import { searchResultPage } from "../POM/searchResultPage/searchResultPage";

describe("Eldorado am - Cart functionality", () => {
  beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.visit("");
  });

  describe("Verify elements & content", () => {
    it("Verify Empty cart page", () => {
      searchHeader.clickCartButton();
      cartPage.elements
        .checkoutSection()
        .should("exist")
        .and("be.visible")
        .find("p")
        .should("be.visible")
        .and("have.text", "Ձեր զամբյուղում ոչ մի ապրանք չկա");
      cartPage.elements.cartEmpty().should("exist").and("be.visible");
      cartPage.elements.clickHere().should("exist").and("be.visible");
    });

    it("Add element to cart", () => {
      searchHeader.clickHomeButton();
      searchHeader.performSearch("headphone");
      searchResultPage.clickOnProductByIndex(0);
      cy.wait(2000);
      cartPage.addToCart();
      cartPage.elements.descriptionInner.should("exist").and("be.visible");
      cartPage.elements.productSku.should("exist").and("be.visible");
      cartPage.elements.productSku.should("exist").and("be.visible");
      cartPage.elements.creditFormButton.and("be.visible").and("be.enabled");
      cartPage.elements.buyNow().and("be.visible").and("be.enabled");
    });

    it("Navigate to cart page, assure that element is added", () => {
      searchHeader.clickCartButton();
      cy.wait(2000);
      cartPage.elements.cartProduct().should("exist").and("be.visible");
      cartPage.elements.priceExcludingTax.should("exist").and("be.visible");
      cartPage.elements.itemCount.should("exist").and("be.visible");
    });
  });
});
