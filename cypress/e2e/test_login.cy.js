import loginLocators from "../fixtures/locators/login_locator.json";

describe("Login Scenario", () => {
  it("Launch Annotation Tool", () => {
    cy.launch_app();
    // cy.visit(
    //   "https://automlvmjptest01.japaneast.cloudapp.azure.com/annotation/auth/login"
    // );
    // cy.visit('https://annotation.fata-organa.com/auth/login')
  });

  it("Change language", () => {
    cy.launch_app();

    // Define language elements
    const japaneseElements = ["ユーザー名", "パスワード"];
    const englishElements = ["Username", "Password"];

    // Click on the Japanese flag and verify Japanese elements
    cy.get(loginLocators.jp_flag).click();
    japaneseElements.forEach((element) => cy.contains(element).should("exist"));

    // Click on the US flag and verify English elements
    cy.get(loginLocators.us_flag).click();
    englishElements.forEach((element) => cy.contains(element).should("exist"));
  });

  // it("Login process - invalid", () => {
  //   cy.fixture("example.json").then((exampleData) => {
  //     const username = exampleData.name;
  //     const password = exampleData.name;

  //     cy.get("input[type='text']")
  //       .type(username)
  //       .should("have.value", username)
  //       .wait(1000);
  //     cy.get("input[type='password']").type(password);
  //   });
  //   cy.get("//button[@type='submit']").click();
  // });

  // it("Login process - valid", () => {});
});
