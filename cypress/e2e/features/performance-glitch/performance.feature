# language: pt

@regressivo
@performance
@smoke
Funcionalidade: Comportamento do usuário com performance glitch
  Como um usuário autenticado
  Quero verificar o comportamento do usuário com performance glitch
  Para entender as limitações e peculiaridades desse tipo de usuário

    Contexto: Login com usuário com performance glitch
        Dado que estou na página de login
        Quando faço login com usuário performance glitch
        Então clico no botão de login

    @performance_001
    Cenário: Validar tempo de carregamento no login
        Então o tempo de carregamento deve ser menor que "40" ms

    @performance_002
    Cenário: Validar tempo de carregamento na página de produtos 
        Dado devo visualizar a página de produtos
        Quando seleciono um produto "backpack"
        Então o tempo de carregamento para a página do produto deve ser menor que "40" ms

    @performance_003
    Cenário: Validar tempo de carregamento na página de carrinho 
        Dado devo visualizar a página de produtos
        Quando seleciono um produto "backpack"
        E clico no botão de adicionar ao carrinho
        E o ícone do carrinho deve exibir "1"
        E devo visualizar o produto no carrinho
        Então o tempo de carregamento para a página do carrinho deve ser menor que "40" ms

    @performance_004
    Cenário: Validar tempo de carregamento voltar na pagina de produtos
        Dado devo visualizar a página de produtos
        Quando seleciono um produto "backpack"
        E clico no botão de adicionar ao carrinho
        E o ícone do carrinho deve exibir "1"
        E devo visualizar o produto no carrinho
        E clico no botão de voltar para a página de produtos
        Então o tempo de carregamento deve ser menor que "40" ms