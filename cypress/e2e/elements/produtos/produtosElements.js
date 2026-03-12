class ProdutosElements {
  validarOTitulo() {
    return cy.get(".title");
  }

  nomeProdutoLabel() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  descricaoProdutoLabel() {
    return cy.get('[data-test="inventory-item-desc"]');
  }

  precoProdutoText() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  adicionarProdutoAoCarrinhoButton() {
    return cy.get('[data-test="add-to-cart"]');
  }

  iconeCarrinhoButton() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  visualizarProdutoNoCarrinhoLabel() {
    return cy.get('[data-test="inventory-item"]');
  }
}

export default new ProdutosElements();