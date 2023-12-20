//Subsistema 1
class SistemaAutenticacao {
  autenticar(usuario, senha) {
    if (usuario === 'Vitor' && senha === '2424') {
      console.log('Autenticação bem-sucedida.');
      return true;
    } else {
      console.log('Falha na autenticação.');
      return false;
    }
  }
}
 
// Subsistema 2
class SistemaCadastro {
  cadastrarCliente(usuario, senha) {
    console.log(`Usuário ${usuario} cadastrado com sucesso.`);
  }
}
 
// Subsistema 3
class SistemaPedidos {
  fazerPedido(usuario, produtos) {
    console.log(`Pedido realizado por ${usuario}: ${produtos.join(', ')}`);
  }
}
 
// Fachada
class LojaOnline {
  constructor() {
    this.autenticacao = new SistemaAutenticacao();
    this.cadastro = new SistemaCadastro();
    this.pedidos = new SistemaPedidos();
    this.usuariosCadastrados = new Set();
  }
 
  cadastrarUsuario(usuario, senha) {
    this.usuariosCadastrados.add(usuario);
    this.cadastro.cadastrarCliente(usuario, senha);
  }
 
  atendimentoCliente(usuario, senha, produtos) {
    if (this.autenticacao.autenticar(usuario, senha)) {
      if (this.usuariosCadastrados.has(usuario)) {
        this.pedidos.fazerPedido(usuario, produtos);
      } else {
        console.log('Usuário não cadastrado.');
      }
    } else {
      console.log('Atendimento não pôde ser concluído devido a falha na autenticação.');
    }
  }
}
 
// CLIENTE - EXEMPLO DE USO
const loja = new LojaOnline();
 
const usuario1 = 'Vitor';
const senha1 = '2424';
const produtos1 = ['Vibrador', 'Boneco Eletrico'];
 
loja.cadastrarUsuario(usuario1, senha1);
loja.atendimentoCliente(usuario1, senha1, produtos1);
 
const usuario2 = 'Joao';
const senha2 = '1234';
const produtos2 = ['Camiseta', 'Sapatos'];
 
loja.atendimentoCliente(usuario2, senha2, produtos2);