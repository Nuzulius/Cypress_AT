import dashboardLocator from "../fixtures/locators/dashboard_locators.json";
import TC3_4 from "../fixtures/data/TC3_4.json";

describe("Test Case page 3-4", () => {
  it("TC3-4 - scenario 1", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_4.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .click()
        .wait(5000);
      cy.get(dashboardLocator.delete_button).eq(3).wait(5000).click();
      cy.get(dashboardLocator.submit_button).wait(5000).click();
    });
  });
});
