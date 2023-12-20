#Bridge
#Implementação da Interface da pizza
class Massa:
    def __init__(self, tamanho, preco):
        self.tamanho = tamanho
        self.preco = preco

    def getPizza(self):
        return f'Massa: {self.tamanho}'

class Sabor:
    def __init__(self, tipo, preco):
        self.tipo = tipo
        self.preco = preco

    def getPizza(self):
        return f'Sabor: {self.tipo}'

class Borda:
    def __init__(self, espessura, preco):
        self.espessura = espessura
        self.preco = preco

    def getPizza(self):
        return f'Borda: {self.espessura}'

# Composite
class Pizza:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.parts = []

    def adicionar_parte(self, parte):
        self.parts.append(parte)

    def mostrar_detalhes(self):
        detalhes = f'Pizza com tamanho {self.tamanho}:'
        for part in self.parts:
            detalhes += f'\n - {part.getPizza()}'
        return detalhes

    def calcular_preco(self):
        preco_total = 0
        for part in self.parts:
            preco_total += part.preco
        return preco_total

# Exemplo de uso
pizza01 = Pizza('Grande')
pizza01.adicionar_parte(Massa('Fina', 12))
pizza01.adicionar_parte(Sabor('Quatro Queijos', 17))
pizza01.adicionar_parte(Borda('Grande', 6))

pizza02 = Pizza('Média')
pizza02.adicionar_parte(Massa('Grossa', 13))
pizza02.adicionar_parte(Sabor('Portuguesa', 15))
pizza02.adicionar_parte(Borda('Pequena', 4))

pizza03 = Pizza('Pequena')
pizza03.adicionar_parte(Massa('Grossa', 9))
pizza03.adicionar_parte(Sabor('Calabresa', 13))
pizza03.adicionar_parte(Borda('Média', 5))

print(pizza01.mostrar_detalhes())
print(f'Preço total: R${pizza01.calcular_preco()}')

print(pizza02.mostrar_detalhes())
print(f'Preço total: R${pizza02.calcular_preco()}')

print(pizza03.mostrar_detalhes())
print(f'Preço total: R${pizza03.calcular_preco()}')
