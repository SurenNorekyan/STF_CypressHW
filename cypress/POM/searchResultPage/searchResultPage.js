import { searchResultPageLocators } from "./searchResultPageLocators";

class SearchResultPage {
  elements = {
    searchButton: () => {
      return cy.get(searchResultPageLocators.searchButton);
    },

    sortBlock: () => {
      return cy.get(searchResultPageLocators.sortBlock);
    },

    sortTitle: () => {
      return cy.get(searchResultPageLocators.sortTitle);
    },

    sortList: () => {
      return cy.get(searchResultPageLocators.sortList);
    },

    listingActions: () => {
      return cy.get(searchResultPageLocators.listingActions);
    },
    searchResultMessage: () => {
      return cy.get(searchResultPageLocators.searchResultMessage);
    },
  };

  clickOnSearch() {
    this.elements.searchButton().click();
  }

  clickOnSortBy() {
    cy.get(searchResultPageLocators.sortList).find("li").eq(1).click();
  }

  clickOnProductByIndex(index) {
    cy.get(searchResultPageLocators.productGrid)
      .eq(index)
      .should("be.visible")
      .click();
  }
}

export const searchResultPage = new SearchResultPage();
