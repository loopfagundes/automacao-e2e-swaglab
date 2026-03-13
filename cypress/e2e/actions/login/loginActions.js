import loginElements from "../../elements/login/loginElements";
import produtosElements from "../../elements/produtos/produtosElements";

class LoginActions {

  acessarPaginaLogin() {
    cy.visit("/");
  }

  preencherCredenciais(usuario, senha) {
    loginElements.campoUsuario().clear().type(usuario);
    loginElements.campoSenha().clear().type(senha);
  }

  clicarLogin() {
    loginElements.botaoLogin().click();
  }

  validarLoginComSucesso() {
    cy.url().should("include", "/inventory.html");
    produtosElements.tituloDaPaginaText().should("contain", "Products");
  }

  validarErroLogin() {
    loginElements.mensagemErro().should("be.visible");
  }

  validarUsuarioBloqueado() {
    loginElements.mensagemErro().should("contain", "locked out");
  }
}

export default new LoginActions();