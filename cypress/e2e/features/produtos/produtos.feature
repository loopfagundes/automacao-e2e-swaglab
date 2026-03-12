# language: pt

Funcionalidade: Produtos
  Como um usuário autenticado
  Quero visualizar os produtos disponíveis
  Para poder escolher o que comprar

    Contexto: Credenciais de login
        Dado que estou na página de login
        Quando faço login com usuário válido
        E clico no botão de login
        Então devo visualizar a página de produtos

    Cenário: Adiciona produto ao carrinho
        Dado que estou na página de produtos
        Quando seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        Então devo visualizar o produto no carrinho

    # Cenário: Remove produto do carrinho
    #     Dado que estou na página de produtos
    #     Quando seleciono um produto
    #     E visualizo os detalhes do produto
    #     E clico no botão de adicionar ao carrinho
    #     E visualizo o carrinho
    #     E clico no botão de remover produto
    #     Então o produto deve ser removido do carrinho

    # Cenário: Adiciona múltiplos produtos ao carrinho
    #     Dado que estou na página de produtos
    #     Quando clico no botão de adicionar ao carrinho para cada produto
    #     Então devo visualizar todos os produtos adicionados no carrinho

    # Cenário: Remove todos os produtos do carrinho
    #     Dado que estou na página de produtos
    #     Quando clico no botão de adicionar ao carrinho para cada produto
    #     E devo visualizar todos os produtos adicionados no carrinho
    #     E clico no botão de remover todos os produtos
    #     Então o carrinho deve estar vazio

    # Cenário: Adiciona produto ao carrinho ate checkout
    #     Dado que estou na página de produtos
    #     Quando seleciono um produto
    #     E clico no botão de adicionar ao carrinho
    #     E visualizo o carrinho
    #     E clico no botão de checkout
    #     Então devo ser redirecionado para a página de checkout