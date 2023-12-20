// Código de exemplo usando o JS no padrão de projeto Builder para um Comércio Eletrônico
// Definir os objetos do Comércio Eletrônico
class Produto{
    constructor(nome){
        this.nome = nome;
    }
}

class Pedido{
    constructor(numero){
        this.numero = numero;
    }
}

class Valor{
    constructor(preco){
        this.preco = preco;
    }
}

class Pagamento{
    constructor(forma){
        this.forma = forma;
    }
}

// Builder
class ComercioBuilder{
    constructor(){
        this.produto = null;
        this.pedido = null;
        this.valor = null;
        this.pagamento = null;
    }

    adicionarProduto(nome){
        this.produto = new Produto(nome);
        return this;
    }

    adicionarPedido(numero){
        this.pedido = new Pedido(numero);
        return this;
    }

    adicionarValor(preco){
        this.valor = new Valor(preco);
        return this;
    }
    
    adicionarPagamento(forma){
        this.pagamento = new Pagamento(forma);
        return this;
    }
    
    construir(){
        return new Comercio(this.produto, this.pedido, this.valor, this.pagamento)
    }
}

// Exemplo de uso do Comercio Eletronico
class Comercio{
    constructor(produto, pedido, valor, pagamento){
        this.produto = produto;
        this.pedido = pedido;
        this.valor = valor;
        this.pagamento = pagamento;
    }

    mostrarDetalhes(){
        console.log(`Produto: ${this.produto.nome}, pedido de número: ${this.pedido.numero}, valor total: ${this.valor.preco}, e forma de pagamento: ${this.pagamento.forma}`);
    }
}

// Exemplo de uso ##########################
const builder = new ComercioBuilder();

const comercio01 = builder
.adicionarProduto('Celular')
.adicionarPedido('014')
.adicionarValor(2800.00)
.adicionarPagamento('Cartão de Crédito')
.construir();

const comercio02 = builder
.adicionarProduto('TV')
.adicionarPedido('002')
.adicionarValor(5600.00)
.adicionarPagamento('PIX')
.construir();

const comercio03 = builder
.adicionarProduto('Videogame')
.adicionarPedido('026')
.adicionarValor(1500.00)
.adicionarPagamento('Boleto')
.construir();

const comercio04 = builder
.adicionarProduto('Fogão')
.adicionarPedido('011')
.adicionarValor(1100.00)
.adicionarPagamento('Cartão de Débito')
.construir();

comercio01.mostrarDetalhes();
comercio02.mostrarDetalhes();
comercio03.mostrarDetalhes();
comercio04.mostrarDetalhes();
