import dashboardLocator from "../fixtures/locators/dashboard_locators.json";
import TC3_3 from "../fixtures/data/TC3_3.json";

describe("Test Case page 3-3", () => {
  it("TC3-3 - scenario 1", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .click()
        .wait(5000);
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.save_button).wait(5000).click();
    });
  });

  it("TC3-3 - scenario 2", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 3", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 4", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .click()
        .wait(5000);
      cy.get(dashboardLocator.save_button).wait(5000).click();
    });
  });

  it("TC3-3 - scenario 5", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 6", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 7", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;

      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.save_button).wait(5000).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 8", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 9", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 10", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
    });
  });

  it("TC3-3 - scenario 11", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 12", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
    });
  });

  it("TC3-3 - scenario 13", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      const relabel = data.reselect_label;

      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(`label:nth-child(${relabel}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
    });
  });

  it("TC3-3 - scenario 14", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      const relabel = data.reselect_label;

      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(`label:nth-child(${relabel}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 15", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      const relabel = data.reselect_label;

      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(`label:nth-child(${relabel}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });

  it("TC3-3 - scenario 16", () => {
    cy.viewport(1440, 810);
    cy.valid_login();

    // process
    cy.get(dashboardLocator.dashboard_menu).click().wait(5000);
    TC3_3.data.forEach((data) => {
      const label = data.label;
      const relabel = data.reselect_label;

      cy.get(dashboardLocator.project_dropdown)
        .type(data.project + "{enter}")
        .wait(5000);
      cy.get(dashboardLocator.project_data)
        .wait(5000)
        .eq(data.project_data)
        .wait(5000)
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.save_button).wait(5000).focus().click();
      cy.get(`label:nth-child(${relabel}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.prev_annotation_data_button)
        .eq(5)
        .focus()
        .click();
      cy.get(`label:nth-child(${label}) > span:nth-child(1)`).click();
      cy.get(dashboardLocator.next_annotation_data_button)
        .wait(5000)
        .focus()
        .click();
    });
  });
});
