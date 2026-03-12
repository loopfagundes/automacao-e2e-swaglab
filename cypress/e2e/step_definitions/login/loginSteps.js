import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginActions from "../../actions/login/loginActions";

let usuarios;

before(() => {
  cy.fixture("usuarios").then((dados) => {
    usuarios = dados;
  });
});

Given("que estou na página de login", () => {
  loginActions.acessarPaginaLogin();
});

When("faço login com usuário válido", () => {
  loginActions.preencherCredenciais(usuarios.valido.usuario, usuarios.valido.senha);
});

When("faço login com usuário inválido", () => {
  loginActions.preencherCredenciais(usuarios.invalido.usuario, usuarios.invalido.senha);
});

When("faço login com usuário bloqueado", () => {
  loginActions.preencherCredenciais(usuarios.bloqueado.usuario, usuarios.bloqueado.senha);
});

When("faço login com usuário problemático", () => {
  loginActions.preencherCredenciais(usuarios.problematico.usuario, usuarios.problematico.senha);
});

When("faço login com usuário performance glitch", () => {
  loginActions.preencherCredenciais(usuarios.performance.usuario, usuarios.performance.senha);
});

When("faço login com usuário error", () => {
  loginActions.preencherCredenciais(usuarios.error.usuario, usuarios.error.senha);
});

When("faço login com usuário visual", () => {
  loginActions.preencherCredenciais(usuarios.visual.usuario, usuarios.visual.senha);
});

When("clico no botão de login", () => {
  loginActions.clicarLogin();
});

Then("devo visualizar a página de produtos", () => {
  loginActions.validarLoginComSucesso();
});

Then("devo visualizar mensagem de erro", () => {
  loginActions.validarErroLogin();
});

Then("devo visualizar mensagem de usuário bloqueado", () => {
  loginActions.validarUsuarioBloqueado();
});