class PerformanceElements {

    continueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]');
    }
}

export default new PerformanceElements();