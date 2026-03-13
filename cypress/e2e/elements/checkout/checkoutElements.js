import { de } from "@faker-js/faker";

class checkoutElements {
    validarOTituloText() {
        return cy.get(".title");
    }

    primeiroNomeUsuarioInput() {
        return cy.get('[data-test="firstName"]');
    }

    sobrenomeUsuarioInput() { 
        return cy.get('[data-test="lastName"]'); 
    }

    zipCodeInput() {
        return cy.get('[data-test="postalCode"]');
    }

    continueButton() {
        return cy.get('[data-test="continue"]');
    }

    detalhesDoProdutoLabel() {
        return cy.get('[data-test="inventory-item"]');
    }

    precoTotalFinalLabel() {
        return cy.get('[data-test="total-label"]');
    }

    finalizarCompraButton() {
        return cy.get('[data-test="finish"]');
    }

    mensagemCompraComSucessoText() {
        return cy.get('[data-test="complete-header"]');
    }

    tresListrasMenuButton() {
        return cy.get('#react-burger-menu-btn');
    }

    logoutMenuButton() {
        return cy.get('#logout_sidebar_link');
    }
}

export default new checkoutElements();