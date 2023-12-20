# Class Cliente
class Client:
  def __init__(self):
   self.adapter = Adapter()

  def request(self):
    print("Fazendo uma Requisição")
    self.adapter.specificRequest()

# Classe Serviço Existente
class Adaptee:
  def specificRequest(self):
    print("Adaptação do Serviço Existente para o Cliente")

# Classe Adaptador
class Adapter(Adaptee):
  def specificRequest(self):
    print("Adaptação do Serviço Existente para o Cliente")

#Utilizando o Adaptador
client = Client()
client.request()