from abc import ABC, abstractmethod

# Interface da Fabrica Abstrata
class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self):
        pass
    
    @abstractmethod
    def create_product_b(self):
        pass

# Fabrica Concreta que cria produto do Tipo A e B - Especificação 1
class ConcreteFactory1(AbstractFactory):
    def create_product_a(self):
        return ConcreteProductA1()

    def create_product_b(self):
        return ConcreteProductB1()

# Fabrica Concreta que cria produtos do Tipo A e B - Especificação 2
class ConcreteFactory2(AbstractFactory):
    def create_product_a(self):
        return ConcreteProductA2()

    def create_product_b(self):
        return ConcreteProductB2()

# Interface dos Produtos do Tipo A
class AbstractProductA(ABC):
    @abstractmethod
    def method_a(self):
        pass

# Implementação Concreta do Produto do Tipo A - Especificação 1
class ConcreteProductA1(AbstractProductA):
    def method_a(self):
        return "Produto do Tipo A da Fabrica 1"

# Implementação Concreta do Produto do Tipo A - Especificação 2
class ConcreteProductA2(AbstractProductA):
    def method_a(self):
        return "Produto do Tipo A da Fabrica 2"

# Interface dos Produtos do Tipo B
class AbstractProductB(ABC):
    @abstractmethod
    def method_b(self):
        pass

# Implementação Concreta do Produto do Tipo B - Especificação 1
class ConcreteProductB1(AbstractProductB):
    def method_b(self):
        return "Produto do Tipo B da Fabrica 1"

# Implementação Concreta do Produto do Tipo B - Especificação 2
class ConcreteProductB2(AbstractProductB):
    def method_b(self):
        return "Produto do Tipo B da Fabrica 2"

# Função para Demonstrar o Padrão Abstract Factory
def cliente_code(factory):
    product_a = factory.create_product_a()
    product_b = factory.create_product_b()

    print(product_a.method_a())
    print(product_b.method_b())

# Exemplo de Uso com a Primeira Fabrica
factory1 = ConcreteFactory1()
cliente_code(factory1)

# Exemplo de Uso com a Segunda Fabrica
factory2 = ConcreteFactory2()
cliente_code(factory2)
