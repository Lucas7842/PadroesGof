// Subsistema 1
class SistemaAutenticação{
    processoAutenticacao(usuario){
        console.log(`Autenticação realizada de ${usuario}`);
    }
}

// Subsistema 2
class SistemaCadastroEmail{
    criarEmail(usuario){
        console.log(`Email criado para: ${usuario}`);
    }
}

// Subsistema 3
class SistemaCadastroSenha{
    criarSenha(usuario){
        console.log(`Senha criada para: ${usuario}`);
    }
}

// Subsistema 4
class SistemaPagamento{
    processoPagamento(preco, preco2, preco3){
        console.log(`Processamento pagamento nos valores de R$ ${preco}, R$ ${preco2}, R$ ${preco3}`);
    }
}

// Subsistema 5
class SistemaPedidos{
    enviarPedido(usuario, mensagem){
        console.log(`Pedido enviado para ${usuario}: ${mensagem}`);
    }
}

// Fachada
class LojaOnline{
    constructor(){
        this.autenticacao = new SistemaAutenticação();
        this.cadastroemail = new SistemaCadastroEmail();
        this.cadastrosenha = new SistemaCadastroSenha();
        this.pagamento = new SistemaPagamento();
        this.pedidos = new SistemaPedidos();
    }

    realizarCompra(produto, produto2, produto3, usuario){
        this.autenticacao.processoAutenticacao(usuario);
        this.cadastroemail.criarEmail(usuario);
        this.cadastrosenha.criarSenha(usuario);
        this.pagamento.processoPagamento(produto.preco, produto2.preco2, produto3.preco3);
        this.pedidos.enviarPedido(usuario, `Seus pedidos de ${produto.nome}, ${produto2.nome}, ${produto3.nome} foram enviados`);
    }
}

// CLIENTE - EXEMPLO DE USO ####################
const loja = new LojaOnline();

const produto = {
    nome: 'Computador',
    preco: 3500.00,
};

const produto2 = {
    nome: 'Videogame',
    preco2: 2000.00,
};

const produto3 = {
    nome: 'TV',
    preco3: 4700.00,
};

const usuario = 'Exemplo1@exemplo.com';

loja.realizarCompra(produto, produto2, produto3, usuario);

