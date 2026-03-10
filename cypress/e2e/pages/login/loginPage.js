class LoginPage {
    acessarLogin() {
        cy.visit("/");
    }

    validarTitulo() {
        cy.get('.login_logo')
            .should("be.visible")
            .and("contain", "Swag Labs");
    }

    preencherUsuario(usuario) {
        cy.get('[data-test="username"]')
            .clear()
            .type(usuario);
    }

    preencherSenha(senha) {
        cy.get('[data-test="password"]')
            .clear()
            .type(senha);
    }

    clicarBotaoLogin() {
        cy.get('[data-test="login-button"]')
            .click();
    }

    validarMensagemErro() {
        cy.get('[data-test="error"]')
            .should("be.visible");
    }

    validarMensagemUsuarioBloqueado() {
        cy.get('[data-test="error"]')
            .should("contain", "locked out");
    }
}

export default new LoginPage();