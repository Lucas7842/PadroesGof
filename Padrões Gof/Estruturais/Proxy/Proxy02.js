// Objeto Real - Classe Produto
class Produto{
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes(){
    console.log(`Produto: ${this.nome}, Preço: ${this.preco.toFixed(2)}`);
  }
}
 // Proxy - Classe ProxyProduto
 class ProxyProduto{
  constructor(produto){
    this.produto = produto;
  }
 exibirDetalhes(){
  console.log("Aguardando autenticação...");
  this.autenticar();
  this.produto.exibirDetalhes();
 }
autenticar(){
  console.log("Autenticar usuario...");
  //INSERIR LOGICA DE AUTENTICAÇÃO AQUI
  console.log("Usuario autenticado com sucesso");
}

 }

 // Cliente - Uso do Proxy
 const produtoReal = new Produto("Camisa", 39.90);
 const proxyProduto = new ProxyProduto(produtoReal);

 proxyProduto.exibirDetalhes();