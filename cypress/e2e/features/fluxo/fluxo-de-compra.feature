# language: pt

@regressivo
@fluxoDeCompra
@smoke
Funcionalidade: Fluxo de Compra
  Como um usuário autenticado
  Quero realizar uma compra completa
  Para receber meus produtos

    Cenário: Realiza compra completa com sucesso
        Dado que estou na página de login
        Quando faço login com usuário válido
        E clico no botão de login
        E devo visualizar a página de produtos
        E que estou na página de produtos
        E seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        E o ícone do carrinho deve exibir "1"
        E devo visualizar o produto no carrinho
        E clico no botão de checkout
        E preencho as informações de checkout com dados válidos
        E clico no botão de continuar
        E verifico os detalhes do pedido
        E clico no botão de finalizar compra
        Quando devo visualizar a mensagem de compra finalizada com sucesso
        Então realizo o logout do usuário