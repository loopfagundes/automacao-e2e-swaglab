import produtosElements from "../../elements/produtos/produtosElements";

class ProdutosActions {

    acessarPaginaProdutos() {
        cy.url().should("include", "/inventory.html");
        produtosElements.validarOTitulo().should("contain", "Products");
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

    visualizarCarrinho() {
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
        produtosElements.iconeCarrinhoButton().click();
        produtosElements.visualizarAListaDeProdutosNoCarrinhoText().should("contain", "Sauce Labs Backpack");
        produtosElements.visualizarAListaDeProdutosNoCarrinhoText().should("contain", "Sauce Labs Bike Light");
    }
}

export default new ProdutosActions();