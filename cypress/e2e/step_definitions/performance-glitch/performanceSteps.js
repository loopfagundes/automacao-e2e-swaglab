import { Then } from "@badeball/cypress-cucumber-preprocessor";
import performanceActions from "../../actions/performance-glitch/performanceActions";

Then("o tempo de carregamento deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.medirTempoDeCarregamentoParaPaginaDeProdutos(tempoLimite);
});

Then("o tempo de carregamento para a página do produto deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.medirTempoDeCarregamentoNaPdp(tempoLimite);
});

Then("o tempo de carregamento para a página do carrinho deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.medirTempoDeCarregamentoAposAdicionarAoCarrinho(tempoLimite);
});

Then("clico no botão de voltar para a página de produtos", () => {
    performanceActions.voltarParaPaginaDeProdutos();
});