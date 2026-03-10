
import loginPage from "../../pages/login/loginPage";
import inventoryPage from "../../pages/produtos/inventoryPage";

class LoginActions {
  acessarPaginaLogin() {

    loginPage.acessarLogin();
  }

  preencherCredenciais(usuario, senha) {
    loginPage.preencherUsuario(usuario);
    loginPage.preencherSenha(senha);
  }

  clicarEmLogin() {
    loginPage.clicarBotaoLogin();
  }

  validarLoginComSucesso() {
    inventoryPage.validarPaginaProdutos();
  }

  validarErroLogin() {
    loginPage.validarMensagemErro();
  }

  validarUsuarioBloqueado() {
    loginPage.validarMensagemUsuarioBloqueado();
  }

  realizarLogin(usuario, senha) {
    this.acessarPaginaLogin();
    this.preencherCredenciais(usuario, senha);
    this.clicarEmLogin();
  }
}

export default new LoginActions();