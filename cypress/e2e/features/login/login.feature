# language: pt

Funcionalidade: Login

Cenário: Login com sucesso
  Dado que estou na página de login
  Quando preencho usuário "standard_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com senha inválida
  Dado que estou na página de login
  Quando preencho usuário "standard_user" e senha "secret_error"
  E clico no botão de login
  Então devo visualizar mensagem de erro

Cenário: Login com usuário bloqueado
  Dado que estou na página de login
  Quando preencho usuário "locked_out_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar mensagem de usuário bloqueado

Cenário: Login com usuário problemático
  Dado que estou na página de login
  Quando preencho usuário "problem_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário performance glitch
  Dado que estou na página de login
  Quando preencho usuário "performance_glitch_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário error
  Dado que estou na página de login
  Quando preencho usuário "error_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário visual
  Dado que estou na página de login
  Quando preencho usuário "visual_user" e senha "secret_sauce"
  E clico no botão de login
  Então devo visualizar a página de produtos