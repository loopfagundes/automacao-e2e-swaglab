import { Then } from "@badeball/cypress-cucumber-preprocessor";
import performanceActions from "../../actions/performance-glitch/performanceActions";

Then("o tempo de carregamento deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.paraPaginaDeProdutos(tempoLimite);
});

Then("o tempo de carregamento para a página do produto deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.naPaginaDeProduto(tempoLimite);
});

Then("o tempo de carregamento para a página do carrinho deve ser menor que {string} ms", (tempoLimite) => {
    performanceActions.aposAdicionarAoCarrinho(tempoLimite);
});

Then("clico no botão de voltar para a página de produtos", () => {
    performanceActions.voltarParaPaginaDeProdutos();
});