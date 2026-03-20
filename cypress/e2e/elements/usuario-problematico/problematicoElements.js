class ProblematicoElements {

    produtosImagens() {
        return cy.get('.inventory_item_img img');
    }

    nomeDoProdutoLabel() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    adicionarAoCarrinhoButton() {
        return cy.get('[data-test="add-to-cart"]');
    }

    iconeCarrinhoBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    campoPrimeiroNomeInput() {
        return cy.get('[data-test="firstName"]');
    }

    campoSobrenomeInput() { 
        return cy.get('[data-test="lastName"]'); 
    }

    campoZipCodeInput() {
        return cy.get('[data-test="postalCode"]');
    }

    mensagemErroCheckout() {
        return cy.get('[data-test="error"]');
    }
}

export default new ProblematicoElements();