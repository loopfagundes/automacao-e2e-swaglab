import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutActions from "../../actions/checkout/checkoutActions";


Given("que estou na página de Checkout Your Information", () => {
    checkoutActions.validarPaginaCheckout();
});

When("preencho as informações de checkout com dados válidos", () => {
    checkoutActions.preencherInformacoesCheckout();
});

Then("clico no botão de continuar", () => {
    checkoutActions.clicarNoBotaoContinuar();
});

Then("devo visualizar a página de Checkout Overview", () => {
    checkoutActions.validarPaginaCheckoutOverview();
});

Then("verifico os detalhes do pedido", () => {
    checkoutActions.verificarDetalhesDoPedido();
});

Then("clico no botão de finalizar compra", () => {
    checkoutActions.clicarNoBotaoFinalizarCompra();
});

Then("devo visualizar a mensagem de compra finalizada com sucesso",() => {
    checkoutActions.validarAMensagemCompraFinalizadaComSucesso();
});

Then("realizo o logout do usuário", () => {
    checkoutActions.realizarLogoutDoUsuario();
});