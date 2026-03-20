class ProdutosElements {
  tituloDaPaginaText() {
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

  iconeCarrinhoBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }

  iconeCarrinhoButton() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  visualizarProdutoNoCarrinhoLabel() {
    return cy.get('[data-test="inventory-item"]');
  }

  removerProdutoDoCarrinhoButton() { 
    return cy.get('.btn.btn_secondary.btn_small.cart_button');
  }

  adicionarProdutoBackpackAoCarrinhoButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  adicionarProdutoBikeLightAoCarrinhoButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  visualizarAListaDeProdutosNoCarrinhoText() {
    return cy.get('[data-test="cart-list"]');
  }

  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }
}

export default new ProdutosElements();