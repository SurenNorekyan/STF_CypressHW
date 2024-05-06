import { searchHeaderLocators } from "./searchHeaderLocators";

class SearchHeader {
  elements = {
    topMenu: () => {
      return cy.get(searchHeaderLocators.topMenu);
    },

    phoneBlock: () => {
      return cy.get(searchHeaderLocators.phoneBlock);
    },

    signPopupElement: () => {
      return cy.get(searchHeaderLocators.signPopupElement);
    },

    mainLogo: () => {
      return cy.get(searchHeaderLocators.mainLogo);
    },

    searchInputField: () => {
      return cy.get(searchHeaderLocators.searchInput);
    },

    searchSubmitButton: () => {
      return cy.get(searchHeaderLocators.searchSubmitButton);
    },

    actionsBlock: () => {
      return cy.get(searchHeaderLocators.actionsBlock);
    },

    favoriteBlock: () => {
      return cy.get(searchHeaderLocators.favoriteBlock);
    },

    basketBlock: () => {
      return cy.get(searchHeaderLocators.basketBlock);
    },

    changeLanguageDropDown: () => {
      return cy.get(searchHeaderLocators.changeLanguageDropDown);
    },
  };

  clickHomeButton() {
    this.elements.mainLogo().click();
  }

  clickCartButton() {
    this.elements.basketBlock().click();
  }

  typeInSearchField(productName) {
    this.elements.searchInputField().clear().type(productName);
  }

  performSearch(productName) {
    this.typeInSearchField(`${productName}{enter}`);
  }
}

export const searchHeader = new SearchHeader();
