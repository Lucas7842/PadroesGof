// Subsistema 1
class SistemaPagamento{
  processarPagamento(valor){
      console.log(`Processamento pagamento no valor de R$ ${valor}`);
  }
}

// Subsistema 2
class SistemaLogistica{
  enviarProduto(destinatario){
      console.log(`Enviar produto para: ${destinatario}`);
  }
}

// Subsistema 3
class SistemaNotificacao{
  enviarEmail(destinatario, mensagem){
      console.log(`Enviar e-mail para ${destinatario}: ${mensagem}`);
  }
}

// Fachada
class LojaOnline{
  constructor(){
      this.pagamento = new SistemaPagamento();
      this.logistica = new SistemaLogistica();
      this.notificacao = new SistemaNotificacao();
  }

  realizarCompra(produto, destinatario){
      this.pagamento.processarPagamento(produto.preco);
      this.logistica.enviarProduto(destinatario);
      this.notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado`);
  }
}

// CLIENTE - EXEMPLO DE USO #######################
const loja = new LojaOnline();

const produto = {
  nome: 'Calsinha',
  preco: 49.99
};

const destinatario = 'VitorMaricona2424@gay.com';

loja.realizarCompra(produto, destinatario);
