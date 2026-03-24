import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import produtosActions from "../../actions/produtos/produtosActions";

let produtos;

before(() => {
    cy.fixture("produtos").then((mensagem) => {
        produtos = mensagem;
    });
});

Given("que estou na página de produtos", () => {
    produtosActions.acessarPaginaProdutos();
});

When("seleciono um produto {string}", (produtoKey) => {
    const nomeProduto = produtos[produtoKey].nome;
    produtosActions.selecionarProduto(nomeProduto);
});

Then("visualizo os detalhes do produto", () => {
    produtosActions.visualizarDetalhesProduto();
});

Then("clico no botão de adicionar ao carrinho", () => {
    produtosActions.adicionarProdutoAoCarrinho();
});

Then("o ícone do carrinho deve exibir {string}", (quantidadeEsperada) => {
    produtosActions.validarQuantidadeNoCarrinho(quantidadeEsperada);
});

Then("devo visualizar o produto no carrinho", () => {
    produtosActions.validarSeOsProdutosNoCarrinho();
});

Then("clico no botão de remover produto", () => {
    produtosActions.removerProdutoDoCarrinho();
});

Then("o produto deve ser removido do carrinho", () => {
    produtosActions.validarSeProdutoFoiRemovidoDoCarrinho();
});

Then("clico no botão de adicionar ao carrinho para cada produto", () => {
    produtosActions.adicionaMultiplosProdutosAoCarrinho();
});

Then("devo visualizar todos os produtos adicionados no carrinho", () => {
    produtosActions.visualizarTodosProdutosAdicionadosNoCarrinho();
});

Then("clico no botão de remover todos os produtos do carrinho", () => {
    produtosActions.clicarBotaoRemoverTodosProdutosDoCarrinho();
});

Then("o carrinho deve estar vazio", () => {
    produtosActions.validarSeProdutoFoiRemovidoDoCarrinho();
});

Then("clico no botão de checkout", () => {
    produtosActions.clicarCheckout();
});

Then("devo ser redirecionado para a página de checkout", () => {
    produtosActions.validarPaginaCheckout();
});