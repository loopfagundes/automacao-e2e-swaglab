# language: pt

Funcionalidade: Login

Cenário: Login com sucesso
  Dado que estou na página de login
  Quando faço login com usuário válido
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com senha inválida
  Dado que estou na página de login
  Quando faço login com usuário inválido
  E clico no botão de login
  Então devo visualizar mensagem de erro

Cenário: Login com usuário bloqueado
  Dado que estou na página de login
  Quando faço login com usuário bloqueado
  E clico no botão de login
  Então devo visualizar mensagem de usuário bloqueado

Cenário: Login com usuário problemático
  Dado que estou na página de login
  Quando faço login com usuário problemático
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário performance glitch
  Dado que estou na página de login
  Quando faço login com usuário performance glitch
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário error
  Dado que estou na página de login
  Quando faço login com usuário error
  E clico no botão de login
  Então devo visualizar a página de produtos

Cenário: Login com usuário visual
  Dado que estou na página de login
  Quando faço login com usuário visual
  E clico no botão de login
  Então devo visualizar a página de produtos