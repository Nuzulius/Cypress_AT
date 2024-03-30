import loginLocators from "../fixtures/locators/login_locator.json";
import loginFixtures from "../fixtures/data/login_fixtures.json";

describe("Login Scenario", () => {
  it("Launch Annotation Tool", () => {
    cy.launch_app();
  });

  it("Change language", () => {
    cy.launch_app();

    // Define elements
    const jp = ["ユーザー名", "パスワード"];
    const en = ["Username", "Password"];

    // process
    cy.get(loginLocators.jp_flag).click();
    jp.forEach((element) => cy.contains(element).should("exist"));

    cy.get(loginLocators.us_flag).click();
    en.forEach((element) => cy.contains(element).should("exist"));
  });

  it("Login process - invalid", () => {
    cy.launch_app();

    // Define elements
    const validation = ["ログアウト", "logout"];

    // process
    loginFixtures.login_invalid.forEach((credentials) => {
      if (credentials.username === "" || credentials.password === "") {
        return;
      }

      cy.get(loginLocators.username_input).clear().type(credentials.username);
      cy.get(loginLocators.password_input).clear().type(credentials.password);
      cy.get(loginLocators.login_button).click();

      validation.forEach((element) => {
        cy.contains(element).should("not.exist");
      });
    });
  });

  it("Login process - valid", () => {
    cy.launch_app();

    // Define elements
    const languages = {
      jp: {
        flag: loginLocators.jp_flag,
        elements: ["ユーザー名", "パスワード"],
      },
      en: { flag: loginLocators.us_flag, elements: ["Username", "Password"] },
    };

    const performLogin = (language) => {
      const { flag, elements } = languages[language];

      cy.get(flag).click();
      elements.forEach((element) => cy.contains(element).should("exist"));

      loginFixtures.login_valid.forEach((credentials) => {
        if (credentials.username !== "" && credentials.password !== "") {
          cy.get(loginLocators.username_input)
            .clear()
            .type(credentials.username);
          cy.get(loginLocators.password_input)
            .clear()
            .type(credentials.password);
          cy.get(loginLocators.login_button).click();
          cy.wait(2000);
          cy.get(loginLocators.logout_button).click();
        }
      });
    };

    Object.keys(languages).forEach((language) => performLogin(language));
  });

  //
});
