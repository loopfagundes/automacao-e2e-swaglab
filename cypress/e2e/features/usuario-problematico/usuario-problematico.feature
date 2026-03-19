# language: pt

Funcionalidade: Comportamento do usuário problemático
  Como um usuário autenticado
  Quero verificar o comportamento do usuário problemático
  Para entender as limitações e peculiaridades desse tipo de usuário

    Contexto: Login com usuário problemático
      Dado que estou na página de login
      Quando faço login com usuário problemático
      E clico no botão de login
      Então devo visualizar a página de produtos

    Cenário: Deve exibir imagens incorretas 
      Dado que estou na página de produtos
      Então devo visualizar os produtos com imagens incorretas

    Cenário: Detalhes incorretos do produto
      Dado que estou na página de produtos
      Quando selecionar um produto "bikelight"
      Então devo visualizar o produto "bikelight" incorretamente como "boltshirt"
    
    Cenário: Não atualiza contador do carrinho 
      Dado que estou na página de produtos
      Quando selecionar um produto "bikelight"
      E devo visualizar o produto "bikelight" incorretamente como "boltshirt"
      E o botão de adicionar ao carrinho habilitado
      Então o ícone do carrinho não deve exibir quantidade
    
    Cenário: Detalhes do item não encontrado 
      Dado que estou na página de produtos
      Quando selecionar um produto "fleecejacket"
      Então devo visualizar "ITEM NOT FOUND" na página de detalhes do produto
    
    Cenário: Campo de primeiro nome deve ser alterado incorretamente ao preencher sobrenome
      Dado que estou na página de produtos
      Quando selecionar um produto "theallthethings"
      E clico no botão de adicionar ao carrinho
      E o ícone do carrinho deve exibir "1"
      E devo visualizar o produto no carrinho
      E clico no botão de checkout
      E que estou na página de Checkout Your Information
      E preencho os campos obrigatórios de checkout
      E clico no botão de continuar
      Então devo visualizar a mensagem de erro "Error: Last Name is required"