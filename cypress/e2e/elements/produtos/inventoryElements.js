class InventoryPage {
  validarOTitulo() {
    return cy.get(".title");
  }
}

export default new InventoryPage();