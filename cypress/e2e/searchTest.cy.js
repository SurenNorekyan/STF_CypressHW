/// <reference types="cypress" />

import { searchResultPage } from "../POM/searchResultPage/searchResultPage";
import { searchHeader } from "../POM/searchHeader/searchHeader";
import helpers from "../POM/searchResultPage/helpers";

describe("Eldorado am - Search Results Page", () => {
  beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.visit("");
  });

  describe("Verify elements & content", () => {
    it("Verify Empty Search Results Page should exist and be visible", () => {
      searchHeader.performSearch("asdzxc");

      searchResultPage.elements.sortBlock().should("exist").and("be.visible");
      searchResultPage.elements.sortTitle().should("exist").and("be.visible");
      searchResultPage.elements
        .sortList()
        .should("exist")
        .and("be.visible")
        .find("li")
        .should("have.length", 3);
      searchResultPage.elements
        .listingActions()
        .should("exist")
        .and("be.visible");
      searchResultPage.elements
        .searchResultMessage()
        .should("exist")
        .and("be.visible");
    });

    it("Go to home page, perform valid search, Perform sorting", () => {
      searchHeader.clickHomeButton();
      searchHeader.performSearch("headphone");
      searchResultPage.clickOnSortBy();
      helpers.verifySorting();
    });
  });
});
