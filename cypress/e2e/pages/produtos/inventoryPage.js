class InventoryPage {
  validarPaginaProdutos() {
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
  }
}

export default new InventoryPage();