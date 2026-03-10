class LoginPage {
  acessarPaginaLogin() {
    cy.visit("/");
  }

  campoUsuario() {
    return cy.get('[data-test="username"]');
  }

  campoSenha() {
    return cy.get('[data-test="password"]');
  }

  botaoLogin() {
    return cy.get('[data-test="login-button"]');
  }

  mensagemErro() {
    return cy.get('[data-test="error"]');
  }
}

export default new LoginPage();