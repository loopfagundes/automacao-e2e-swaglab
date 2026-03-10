# language: pt

Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando preencho usuário "standard_user" e senha "secret_sauce"
    E clico no botão de login
    Então devo visualizar a página de produtos