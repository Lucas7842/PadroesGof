class Soldado:
    def __init__(self, guerreiro):
        self.guerreiro = guerreiro

    def mostrarGuerreiro(self):
        print(f"{self.__class__.__name__}: {self.guerreiro}")

# Subclasses de guerreiros
class Jedi(Soldado):
    def __init__(self, guerreiro):
        super().__init__(guerreiro)

class Sith(Soldado):
    def __init__(self, guerreiro):
        super().__init__(guerreiro)

# Abstrata de Jedi
class TemploDeGuerreiros:
    def criarGuerreiro(self, guerreiro):
        raise NotImplementedError("Método abstrato")

# Jedi
class TemploJedi(TemploDeGuerreiros):
    def criarGuerreiro(self, guerreiro):
        return Jedi(guerreiro)

# Sith
class TemploSith(TemploDeGuerreiros):
    def criarGuerreiro(self, guerreiro):
        return Sith(guerreiro)

# USO DOS GUERREIROS
temploJedi = TemploJedi()
jedi = temploJedi.criarGuerreiro("Obiwan")
jedi.mostrarGuerreiro()

temploSith = TemploSith()
sith = temploSith.criarGuerreiro("Darth Sidious")
sith.mostrarGuerreiro()
