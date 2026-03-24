import problematicoElements from "../../elements/usuario-problematico/problematicoElements";
import { faker } from '@faker-js/faker';

class ProblematicoActions {

    validarImagensIncorretas() {
        problematicoElements.produtosImagens()
            .should('have.length', 6)
            .each(($img) => {
                cy.wrap($img)
                    .should('have.attr', 'src')
                    .and('include', 'sl-404');
            });
    }

    selecionarProduto(produto) {
        problematicoElements.nomeDoProdutoLabel().contains(produto).click();
    }

    validarRedirecionamentoIncorretoDoProduto(nomeProdutoEsperado, nomeProdutoIncorreto) {
        problematicoElements.nomeDoProdutoLabel()
            .should('be.visible')
            .and('not.have.text', nomeProdutoEsperado)
            .and('have.text', nomeProdutoIncorreto);
    }

    validarHabilitacaoDoBotaoAdicionarAoCarrinho() {
        problematicoElements.adicionarAoCarrinhoButton().should('be.visible').and('be.enabled').click();
    }

    validarIconeCarrinhoSemQuantidade() {
        problematicoElements.iconeCarrinhoBadge().should('not.exist');
    }

    validarMensagemItemNaoEncontrado(produtoNaoEncontrado) {
        problematicoElements.nomeDoProdutoLabel().should('be.visible').and('have.text', produtoNaoEncontrado);
    }

    validarPreenchimentoIncorretoDoCampoSobrenome() {
        const sobrenomeIncorreto = faker.person.lastName();
        problematicoElements.campoPrimeiroNomeInput().type(faker.person.firstName());
        problematicoElements.campoSobrenomeInput().type(sobrenomeIncorreto).should('not.have.value', sobrenomeIncorreto);
        problematicoElements.campoZipCodeInput().type(faker.location.zipCode());
    }

    validarMensagemErroCheckout(mensagemErro) {
        problematicoElements.mensagemErroCheckout().should('be.visible').and('have.text', mensagemErro);
    }
}

export default new ProblematicoActions();