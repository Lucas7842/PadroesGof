# Componente
class ComponenteNotificador:
    def enviar(self, mensagem):
        print(f"Enviando mensagem: {mensagem}")



# Decorador Base
class DecoradorNotificador:
    def __init__(self, componente):
        self.componente = componente


    def enviar(self, mensagem):
        self.componente.enviar(mensagem)



# Decorador Concreto 1
class DecoradorNotificadorSMS(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviando mensagem por SMS: {mensagem}")



# Decorador Concreto 2
class DecoradorNotificadorFacebook(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviando mensagem pelo Facebook: {mensagem}")



# CLIENTE ####################
notificador = ComponenteNotificador()
notificadorComSMS = DecoradorNotificadorSMS(notificador)
notificadorComFacebook = DecoradorNotificadorFacebook(notificadorComSMS)

notificadorComFacebook.enviar("Ola Mundo...")

