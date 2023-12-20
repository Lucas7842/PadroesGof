// Subsistema 1
class SistemaAutenticacao {
  autenticar(usuario, senha) {
    if (usuario === "usuario" && senha === "senha") {
      console.log("Autenticação bem-sucedida.");
      return true;
    } else {
      console.log("Autenticação falhou.");
      return false;
    }
  }
}

// Subsistema 2
class SistemaCadastro {
  cadastrarUsuario(usuario, senha) {
    console.log(`Usuário ${destinatario} cadastrado com sucesso.`);
  }
}

// Subsistema 3
class SistemaPedidos {
  fazerPedido(produto, destinatario) {
    console.log(`Pedido de ${produto.nome}, ${produto2.nome}, ${produto3.nome}, realizado para ${destinatario}`);
  } 
}

// Subsistema 4
class SistemaPagamento {
  processoPagamento(preco, preco2, preco3) {
    console.log(`Processamento pagamento nos valores de R$ ${preco}, R$ ${preco2}, R$ ${preco3} Pedido enviado para ${destinatario}`);
    return true;
  }
}

// Fachada
class LojaOnline {
  constructor() {
    this.autenticacao = new SistemaAutenticacao();
    this.cadastro = new SistemaCadastro();
    this.pedidos = new SistemaPedidos();
    this.pagamento = new SistemaPagamento();
  }

  atendimentoCliente(usuario, senha, produto,produto2,produto3, destinatario) {
    if (this.autenticacao.autenticar(usuario, senha)) {
      this.cadastro.cadastrarUsuario(usuario, senha);
      this.pedidos.fazerPedido(produto, destinatario);
      this.pagamento.processoPagamento(produto.preco, produto2.preco2, produto3.preco3);

    } else {
      console.log("Falha na autenticação. Não é possível continuar.");
    }
  }
}

// CLIENTE - EXEMPLO DE USO #######################
const loja = new LojaOnline();

const usuario = "usuario";
const senha = "senha";
const produto = {
  nome: "Iphone",
  preco: 4800.00
};
const produto2 = {
  nome: 'TV',
  preco2: 1500.00,
};
const produto3 = {
  nome: 'Ventilador',
  preco3: 800.00,
};
const destinatario = "Galadriel245@hotmail.com";

loja.atendimentoCliente(usuario, senha, produto, produto2, produto3, destinatario);
