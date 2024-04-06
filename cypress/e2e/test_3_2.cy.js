import dashboardLocator from "../fixtures/locators/dashboard_locators.json";
import TC3_2 from "../fixtures/data/TC3_2.json";

describe("Test Case page 3-2", () => {
  it("TC3-2 - scenario 1", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);

    TC3_2.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(4000);

      cy.get(dashboardLocator.project_data).eq(6).click().wait(5000);

      if (data.page == "next") {
        cy.get(dashboardLocator.next_page_button).eq(1).click().wait(2000);
      } else if (data.page == "prev") {
        cy.get(dashboardLocator.next_page_button).eq(1).click().wait(2000);
        cy.get(dashboardLocator.prev_page_button).eq(1).click().wait(2000);
      } else {
        cy.get(dashboardLocator.page_dropdown)
          .eq(2)
          .focus()
          .select(data.page)
          .wait(2000);
      }
    });
  });
});
