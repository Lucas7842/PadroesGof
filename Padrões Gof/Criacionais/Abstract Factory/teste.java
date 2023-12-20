// Interface da Fábrica Abstrata
interface FabricaAbstrata {
  ProdutoEletronico criarProdutoEletronico();
  ProdutoModa criarProdutoModa();
}

// Fábrica Concreta que Cria Produtos Eletrônicos
class FabricaEletronico implements FabricaAbstrata {
  @Override
  public ProdutoEletronico criarProdutoEletronico() {
      return new Telefone();
  }

  @Override
  public ProdutoModa criarProdutoModa() {
      return new Camiseta();
  }
}

// Fábrica Concreta que Cria Produtos Moda
class FabricaModa implements FabricaAbstrata {
  @Override
  public ProdutoModa criarProdutoModa() {
      return new Camiseta();
  }

  @Override
  public ProdutoEletronico criarProdutoEletronico() {
      return new Telefone(); // PARA MANTER A ESTRUTURA
  }
}

// Classe Abstrata para Produtos Eletrônicos
abstract class ProdutoEletronico {
  String tipo = "eletrônico";

  String descricao() {
      return "Produto " + tipo + ": Telefone";
  }
}

// Classe Abstrata para Produtos Moda
abstract class ProdutoModa {
  String tipo = "moda";

  String descricao() {
      return "Produto " + tipo + ": Camiseta";
  }
}

// Classe Concreta para Produtos Eletrônicos
class Telefone extends ProdutoEletronico {
  @Override
  String descricao() {
      return "Produto " + tipo + ": Telefone";
  }
}

// Classe Concreta para Produtos Moda
class Camiseta extends ProdutoModa {
  @Override
  String descricao() {
      return "Produto " + tipo + ": Camiseta";
  }
}

// Simulação do uso do Padrão Abstract Factory em LojaVirtual
class LojaVirtual {
  static void venderProdutos(String cliente, FabricaAbstrata fabrica) {
      ProdutoEletronico produtoEletronico = fabrica.criarProdutoEletronico();
      ProdutoModa produtoModa = fabrica.criarProdutoModa();

      System.out.println(cliente + " comprou:");
      System.out.println(produtoEletronico.descricao());
      System.out.println(produtoModa.descricao());
  }
}

// Exemplo de Uso com a Fábrica de Produtos Eletrônicos e Moda
public class teste {
  public static void main(String[] args) {
      String cliente1 = "Lucas Martins";
      FabricaAbstrata fabricaEletronico = new FabricaEletronico();
      LojaVirtual.venderProdutos(cliente1, fabricaEletronico);

      System.out.println("\n ---------- \n");

      String cliente2 = "Michele Alice";
      FabricaAbstrata fabricaModa = new FabricaModa();
      LojaVirtual.venderProdutos(cliente2, fabricaModa);
  }
}
