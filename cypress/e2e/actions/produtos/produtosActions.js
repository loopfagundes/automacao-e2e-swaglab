import produtosElements from "../../elements/produtos/produtosElements";

class ProdutosActions {

    acessarPaginaProdutos() {
        cy.url().should("include", "/inventory.html");
        produtosElements.tituloDaPaginaText().should("contain", "Products");
    }

    selecionarProduto(nomeProduto) {
        produtosElements.nomeProdutoLabel().contains(nomeProduto).click();
        produtosElements.nomeProdutoLabel().should("contain", nomeProduto);
    }

    visualizarDetalhesProduto() {
        produtosElements.descricaoProdutoLabel().should("be.visible");
        produtosElements.precoProdutoText().should("be.visible");
    }

    adicionarProdutoAoCarrinho() {
        produtosElements.adicionarProdutoAoCarrinhoButton().click();
    }

    validarQuantidadeNoCarrinho(quantidadeEsperada) {
        produtosElements.iconeCarrinhoBadge().should("be.visible").and("contain", quantidadeEsperada);
    }

    validarSeOsProdutosNoCarrinho() {
        produtosElements.iconeCarrinhoButton().click();
        produtosElements.visualizarProdutoNoCarrinhoLabel().should("contain", "Sauce Labs Backpack");
    }

    removerProdutoDoCarrinho() {
        produtosElements.removerProdutoDoCarrinhoButton().click();
    }

    validarSeProdutoFoiRemovidoDoCarrinho() {
        produtosElements.visualizarProdutoNoCarrinhoLabel().should("not.exist");
    }

    adicionaMultiplosProdutosAoCarrinho() {
        produtosElements.adicionarProdutoBackpackAoCarrinhoButton().click();
        produtosElements.adicionarProdutoBikeLightAoCarrinhoButton().click();
    }

    visualizarTodosProdutosAdicionadosNoCarrinho() {
        const produtos = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
        produtosElements.iconeCarrinhoButton().click();
        produtos.forEach((produto) => {
            produtosElements.visualizarProdutoNoCarrinhoLabel().should("contain", produto);
        });
    }

    clicarBotaoRemoverTodosProdutosDoCarrinho() {
        produtosElements.removerProdutoDoCarrinhoButton().each(($btn) => {
            cy.wrap($btn).click();
        });
    }

    clicarCheckout() {
        produtosElements.checkoutButton().click();
    }

    validarPaginaCheckout() {
        cy.url().should("include", "/checkout-step-one.html");
        produtosElements.tituloDaPaginaText().should("contain", "Checkout: Your Information");
    }
}

export default new ProdutosActions();