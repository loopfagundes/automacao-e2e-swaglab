import performanceElements from "../../elements/performance-glitch/performanceElements";

class PerformanceActions {

    medirTempoDeCarregamento(endpoint) {
        const inicio = Date.now();
        cy.url().should('include', endpoint).then(() => {
            const fim = Date.now();
            const tempo = fim - inicio;
            cy.log(`Tempo de carregamento: ${tempo} ms`);
        });
    }

    paraPaginaDeProdutos() {
        this.medirTempoDeCarregamento('/inventory.html');
    }

    naPaginaDeProduto() {
        this.medirTempoDeCarregamento('/inventory-item.html?id=4');
    }

    aposAdicionarAoCarrinho() {
        this.medirTempoDeCarregamento('/cart.html');
    }

    voltarParaPaginaDeProdutos() {
        performanceElements.continueShoppingButton().click();
    }
}

export default new PerformanceActions();