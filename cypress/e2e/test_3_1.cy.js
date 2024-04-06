import dashboardLocator from "../fixtures/locators/dashboard_locators.json";
import TC3_1 from "../fixtures/data/TC3_1.json";

describe("Test Case page 3-1", () => {
  it("TC3-1 - scenario 1", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);

    TC3_1.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(4000);

      if (data.page == "next") {
        cy.get(dashboardLocator.next_page_button).click().wait(2000);
      } else if (data.page == "prev") {
        cy.get(dashboardLocator.prev_page_button).click().wait(2000);
      } else {
        cy.get(dashboardLocator.page_dropdown)
          .eq(1)
          .focus()
          .select(data.page)
          .wait(2000);
      }
    });
  });
});
