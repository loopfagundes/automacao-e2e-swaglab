import performanceElements from "../../elements/performance-glitch/performanceElements";

class PerformanceActions {
    medirTempoDeCarregamentoParaPaginaDeProdutos(tempoLimite) {
        const inicio = Date.now();
        cy.url().should('include', '/inventory.html').then(() => {
            const fim = Date.now();
            const tempo = fim - inicio;
            cy.log(`Tempo de carregamento: ${tempo} ms`);
            expect(tempo).to.be.lessThan(Number.parseInt(tempoLimite));
        });
    }

    medirTempoDeCarregamentoNaPdp(tempoLimite) {
        const inicio = Date.now();
        cy.url().should('include', '/inventory-item.html?id=4').then(() => {
            const fim = Date.now();
            const tempo = fim - inicio;
            cy.log(`Tempo de carregamento: ${tempo} ms`);
            expect(tempo).to.be.lessThan(Number.parseInt(tempoLimite));
        });
    }

    medirTempoDeCarregamentoAposAdicionarAoCarrinho(tempoLimite) {
        const inicio = Date.now();
        cy.url().should('include', '/cart.html').then(() => {
            const fim = Date.now();
            const tempo = fim - inicio;
            cy.log(`Tempo de carregamento: ${tempo} ms`);
            expect(tempo).to.be.lessThan(Number.parseInt(tempoLimite));
        });
    }

    voltarParaPaginaDeProdutos() {
        performanceElements.continueShoppingButton().click();
    }
}

export default new PerformanceActions();