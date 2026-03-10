import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/");
  cy.get('.login_logo').should("be.visible").and("contain", "Swag Labs");
});

When("preencho usuário {string} e senha {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
});

When("clico no botão de login", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("devo visualizar a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get('[data-test="title"]').should("contain", "Products");
});

Then("devo visualizar mensagem de erro", () => {
  cy.get('[data-test="error"]').should("be.visible");
});

Then("devo visualizar mensagem de usuário bloqueado", () => {
  cy.get('[data-test="error"]').should("contain", "locked out");
});