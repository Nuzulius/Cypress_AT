import loginLocators from "../fixtures/locators/login_locator.json";

// ***Launch Application***

Cypress.Commands.add("launch_app", () => {
  cy.visit(
    // "https://automlvmjptest01.japaneast.cloudapp.azure.com/annotation/auth/login"
    "https://annotation.fata-organa.com/auth/login"
  );
});

// *** Login ***
Cypress.Commands.add("valid_login", () => {
  cy.visit(
    "https://automlvmjptest01.japaneast.cloudapp.azure.com/annotation/auth/login"
    // "https://annotation.fata-organa.com/auth/login"
  );

  cy.get(loginLocators.username_input).type("em-an-1");
  cy.get(loginLocators.password_input).type("123456");
  cy.get(loginLocators.login_button).click();
});
