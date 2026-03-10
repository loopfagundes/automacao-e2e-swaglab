import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginActions from "../actions/login/loginActions";

Given("que estou na página de login", () => {
  loginActions.acessarPaginaLogin();
});

When("preencho usuário {string} e senha {string}", (usuario, senha) => {
  loginActions.preencherCredenciais(usuario, senha);
});

When("clico no botão de login", () => {
  loginActions.clicarEmLogin();
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