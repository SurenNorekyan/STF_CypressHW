import { searchResultPage } from "./searchResultPage";

export default {
  verifySorting: () => {
    let initialPrices;

    cy.get('[data-price-type="finalPrice"]')
      .invoke("attr", "data-price-amount")
      .then((priceAttributes) => {
        initialPrices = priceAttributes
          .split(" ")
          .map((attribute) => parseFloat(attribute));
      });

    searchResultPage.clickOnSortBy();

    cy.wait(2000);

    let sortedPrices;
    cy.get('[data-price-type="finalPrice"]')
      .invoke("attr", "data-price-amount")
      .then((priceAttributes) => {
        sortedPrices = priceAttributes
          .split(" ")
          .map((attribute) => parseFloat(attribute));
      });

    cy.wrap(sortedPrices).should(
      "deep.equal",
      initialPrices?.sort((a, b) => a - b),
    );
  },
};
