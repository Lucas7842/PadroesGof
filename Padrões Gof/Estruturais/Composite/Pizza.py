# Bridge
class Massa:
    def __init__(self, tamanho, preco):
        self.tamanho = tamanho
        self.preco = preco

    def mostrar_detalhes(self):
        return f'Massa: {self.tamanho}'

class Sabor:
    def __init__(self, tipo, preco):
        self.tipo = tipo
        self.preco = preco

    def mostrar_detalhes(self):
        return f'Sabor: {self.tipo}'

class Borda:
    def __init__(self, espessura, preco):
        self.espessura = espessura
        self.preco = preco

    def mostrar_detalhes(self):
        return f'Borda: {self.espessura}'

# Composite
class Pizza:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.parts = []

    def adicionar_parte(self, part):
        self.parts.append(part)

    def mostrar_detalhes(self):
        detalhes = f'Pizza com tamanho {self.tamanho}:'
        for part in self.parts:
            detalhes += f'\n - {part.mostrar_detalhes()}'
        return detalhes

    def calcular_preco(self):
        preco_total = 0
        for part in self.parts:
            preco_total += part.preco
        return preco_total

# Exemplo de uso
pizza01 = Pizza('Grande')
pizza01.adicionar_parte(Massa('Fina', 10))
pizza01.adicionar_parte(Sabor('Quatro Queijos', 15))
pizza01.adicionar_parte(Borda('Grande', 5))

pizza02 = Pizza('Média')
pizza02.adicionar_parte(Massa('Grossa', 12))
pizza02.adicionar_parte(Sabor('Portuguesa', 14))
pizza02.adicionar_parte(Borda('Pequena', 3))

pizza03 = Pizza('Pequena')
pizza03.adicionar_parte(Massa('Grossa', 8))
pizza03.adicionar_parte(Sabor('Calabresa', 12))
pizza03.adicionar_parte(Borda('Média', 4))

print(pizza01.mostrar_detalhes())
print(f'Preço total: R${pizza01.calcular_preco()}')

print(pizza02.mostrar_detalhes())
print(f'Preço total: R${pizza02.calcular_preco()}')

print(pizza03.mostrar_detalhes())
print(f'Preço total: R${pizza03.calcular_preco()}')
