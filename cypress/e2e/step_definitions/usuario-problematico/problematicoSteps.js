import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import problematicoActions from "../../actions/usuario-problematico/problematicoActions";

let produtos;

before(() => {
    cy.fixture("produtos").then((dados) => {
        produtos = dados;
    });
});

Then("devo visualizar os produtos com imagens incorretas", () => {
    problematicoActions.validarImagensIncorretas();
});

Then("selecionar um produto {string}", (produtoKey) => {
    const produto = produtos[produtoKey].nome;
    problematicoActions.selecionarProduto(produto);
});

Then("devo visualizar o produto {string} incorretamente como {string}", (nomeProdutoEsperado, nomeProdutoIncorreto) => {
    const produtoEsperado = produtos[nomeProdutoEsperado].nome;
    const produtoIncorreto = produtos[nomeProdutoIncorreto].nome;
    problematicoActions.validarRedirecionamentoIncorretoDoProduto(produtoEsperado, produtoIncorreto);
});

Then("o botão de adicionar ao carrinho habilitado", () => {
    problematicoActions.validarHabilitacaoDoBotaoAdicionarAoCarrinho();
});

Then("o ícone do carrinho não deve exibir quantidade", () => {
    problematicoActions.validarIconeCarrinhoSemQuantidade();
});

Then("devo visualizar {string} na página de detalhes do produto", (produtoNaoEncontrado) => {
    problematicoActions.validarMensagemItemNaoEncontrado(produtoNaoEncontrado);
});

Then("preencho os campos obrigatórios de checkout", () => {
    problematicoActions.validarPreenchimentoIncorretoDoCampoSobrenome();
});

Then("devo visualizar a mensagem de erro {string}", (mensagemErro) => {
    problematicoActions.validarMensagemErroCheckout(mensagemErro);
});