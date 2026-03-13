import checkoutElements from '../../elements/checkout/checkoutElements';
import { faker } from '@faker-js/faker';

class CheckoutActions {

    validarPaginaCheckout() {
        cy.url().should("include", "/checkout-step-one.html");
        checkoutElements.validarOTituloText().should("contain", "Checkout: Your Information");
    }

    preencherInformacoesCheckout() {
        checkoutElements.primeiroNomeUsuarioInput().type(faker.person.firstName());
        checkoutElements.sobrenomeUsuarioInput().type(faker.person.lastName());
        checkoutElements.zipCodeInput().type(faker.location.zipCode());
    }

    clicarNoBotaoContinuar() {
        checkoutElements.continueButton().click();
    }

    validarPaginaCheckoutOverview() {
        cy.url().should("include", "/checkout-step-two.html");
        checkoutElements.validarOTituloText().should("contain", "Checkout: Overview");
    }

    verificarDetalhesDoPedido() {
        checkoutElements.detalhesDoProdutoLabel().should("be.visible");
        checkoutElements.precoTotalFinalLabel().should("be.visible");
    }

    clicarNoBotaoFinalizarCompra() {
        checkoutElements.finalizarCompraButton().click();
    }

    validarAMensagemCompraFinalizadaComSucesso() {
        checkoutElements.mensagemCompraComSucessoText().should("contain", "Thank you for your order!");
    }

    realizarLogoutDoUsuario() {
        checkoutElements.tresListrasMenuButton().click();
        checkoutElements.logoutMenuButton().click();
    }


}

export default new CheckoutActions();