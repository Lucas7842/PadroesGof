// Subsistema 1
class SistemaAutenticacao {
  processoAutenticacao(usuario) {
    console.log(`Autenticação realizada para ${usuario}`);
    return true; 
  }
}

// Subsistema 2
class SistemaCadastroEmail {
  criarEmail(usuario) {
    console.log(`Cadastro criado para: ${usuario}`);
  }
}

// Subsistema 3
class SistemaCadastroSenha {
  criarSenha(usuario) {
    console.log(`Senha criada para: ${usuario}`);
  }
}

// Subsistema 4
class SistemaPagamento {
  processoPagamento(preco, preco2, preco3) {
    console.log(`Processamento pagamento nos valores de R$ ${preco}, R$ ${preco2}, R$ ${preco3}`);
    return true;
  }
}

// Subsistema 5
class SistemaPedidos {
  enviarPedido(usuario, mensagem) {
    console.log(`Pedido enviado para ${usuario}: ${mensagem}`);
  }
}

// Fachada
class LojaOnline {
  constructor() {
    this.autenticacao = new SistemaAutenticacao();
    this.cadastroemail = new SistemaCadastroEmail();
    this.cadastrosenha = new SistemaCadastroSenha();
    this.pagamento = new SistemaPagamento();
    this.pedidos = new SistemaPedidos();
  }

  realizarCompra(produto, produto2, produto3, usuario) {
    const autenticado = this.autenticacao.processoAutenticacao(usuario);

    if (autenticado) {
      this.cadastroemail.criarEmail(usuario);
      this.cadastrosenha.criarSenha(usuario);
      const pagamentoSucesso = this.pagamento.processoPagamento(produto.preco, produto2.preco2, produto3.preco3);

      if (pagamentoSucesso) {
        this.pedidos.enviarPedido(usuario, `Seus pedidos de ${produto.nome}, ${produto2.nome}, ${produto3.nome} foram enviados`);
      } else {
        console.log("Falha no pagamento. Pedido não enviado.");
      }
    } else {
      console.log("Falha na autenticação. Pedido não enviado.");
    }
  }
}

// CLIENTE - EXEMPLO DE USO ####################
const loja = new LojaOnline();

const produto = {
  nome: 'Geladeira',
  preco: 3500.00,
};

const produto2 = {
  nome: 'Máquina de Lavar',
  preco2: 2000.00,
};

const produto3 = {
  nome: 'TV',
  preco3: 4700.00,
};

const usuario = 'Galadriel5475@hotmail.com';

loja.realizarCompra(produto, produto2, produto3, usuario);
