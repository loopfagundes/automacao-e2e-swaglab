# language: pt

@regressivo
@produtos
Funcionalidade: Produtos
  Como um usuário autenticado
  Quero visualizar os produtos disponíveis
  Para poder escolher o que comprar

    Contexto: Credenciais de login
        Dado que estou na página de login
        Quando faço login com usuário válido
        E clico no botão de login
        Então devo visualizar a página de produtos

    @produto_001
    Cenário: Adiciona produto ao carrinho
        Dado que estou na página de produtos
        Quando seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        Então devo visualizar o produto no carrinho

    @produto_002
    Cenário: Remove produto do carrinho
        Dado que estou na página de produtos
        Quando seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        E devo visualizar o produto no carrinho
        E clico no botão de remover produto
        Então o produto deve ser removido do carrinho

    @produto_003
    Cenário: Adiciona múltiplos produtos ao carrinho
        Dado que estou na página de produtos
        Quando clico no botão de adicionar ao carrinho para cada produto
        Então devo visualizar todos os produtos adicionados no carrinho

    @produto_004
    Cenário: Remove todos os produtos do carrinho
        Dado que estou na página de produtos
        Quando clico no botão de adicionar ao carrinho para cada produto
        E devo visualizar todos os produtos adicionados no carrinho
        E clico no botão de remover todos os produtos do carrinho
        Então o carrinho deve estar vazio
    
    @produto_005
    Cenário: Exibir contador no carrinho ao adicionar produto
        Dado que estou na página de produtos
        Quando seleciono um produto "backpack"
        E clico no botão de adicionar ao carrinho
        Então o ícone do carrinho deve exibir "1"

    @produto_006
    Cenário: Adiciona produto ao carrinho ate checkout
        Dado que estou na página de produtos
        Quando seleciono um produto "backpack"
        E visualizo os detalhes do produto
        E clico no botão de adicionar ao carrinho
        E o ícone do carrinho deve exibir "1"
        E devo visualizar o produto no carrinho
        E clico no botão de checkout
        Então devo ser redirecionado para a página de checkout