/// <reference types="cypress" />

import { searchHeader } from "../POM/searchHeader/searchHeader";

describe("Eldorado am - Header Elements verification", () => {
  beforeEach(() => {
    cy.viewport(1800, 1000);
    cy.visit("");
  });

  it("Verify Header Elements should be visible", () => {
    searchHeader.elements.mainLogo().should("exist");
    searchHeader.elements.topMenu().find("li").should("have.length", 7);
    searchHeader.elements
      .phoneBlock()
      .should("exist")
      .find("a")
      .should("exist")
      .should("have.text", "+374 11 80 00 00");

    searchHeader.elements.signPopupElement().should("exist");

    searchHeader.elements.searchInputField().should("exist").and("be.empty");
    searchHeader.elements
      .searchSubmitButton()
      .should("be.visible")
      .and("be.disabled");
    searchHeader.elements.actionsBlock().should("exist").and("be.visible");
    searchHeader.elements.favoriteBlock().should("exist").and("be.visible");
    searchHeader.elements.basketBlock().should("exist").and("be.visible");
  });
});
