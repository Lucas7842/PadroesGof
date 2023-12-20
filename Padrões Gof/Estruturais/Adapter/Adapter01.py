# Interface do Cliente
class ITarget:
    def request(self):
        pass

# Cliente
class Client:
    def __init__(self, target):
        self.target = target
    

    def makeRequest(self):
        print("Fazendo uma Requisição")
        self.target.request()



# Serviço Existente (Adaptee)
class Adaptee:
    def specificRequest(self):
        print("Requisição Especifica do Adaptee")



# Adaptador (Adapter)
class Adapter(ITarget):
    def __init__(self, adaptee):
        self.adaptee = adaptee


    def request(self):
        self.adaptee.specificRequest()



# Utilizando o Adaptador #######################################
adaptee = Adaptee()
adapter = Adapter(adaptee)
client = Client(adapter)

client.makeRequest()