# language: pt

Funcionalidade: Checkout
  Como um usuário autenticado
  Quero finalizar minha compra
  Para receber meus produtos

    Contexto: Credenciais de login
        Dado que estou na página de login
        Quando faço login com usuário válido
        E clico no botão de login
        E devo visualizar a página de produtos
        E seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        E devo visualizar o produto no carrinho
        Então clico no botão de checkout

    Cenário: Finaliza compra com sucesso
        Dado que estou na página de Checkout Your Information 
        Quando preencho as informações de checkout com dados válidos
        E clico no botão de continuar
        E devo visualizar a página de Checkout Overview
        E verifico os detalhes do pedido
        E clico no botão de finalizar compra
        Quando devo visualizar a mensagem de compra finalizada com sucesso
        Então realizo o logout do usuário