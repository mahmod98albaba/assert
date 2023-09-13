/// <reference types="Cypress" />
import moment from "moment";
  it("to make sure the departure date is set to be tomorrow", () => {
    cy.visit("https://www.almosafer.com/ar");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__LanguageSwitch"]').click();
    let tomorrow = moment().add(1, "day");
    let formattedDate = `${tomorrow.format("MMMMD dddd")}`;

    cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
      .invoke("text")
      .should("equal", formattedDate);
  });
  it("to make sure the return date is set to be today's date plus 2", () => {
    cy.visit("https://www.almosafer.com/ar");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__LanguageSwitch"]').click();
    let ScReturnDay= moment().add(2, "day");
    let returnFormated = `${ScReturnDay.format("MMMMDdddd")}`;
    cy.get('[data-testid="FlightSearchBox__ToDateButton"]')
      .invoke("text")
      .should("equal", returnFormated);
  });
  it("to make sure that the flight class is set to be economy by default", () => {
    cy.visit("https://www.almosafer.com/ar");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__LanguageSwitch"]').click();
    cy.get(".sc-jWxkHr").invoke("text").should("include", "Economy");
  });

