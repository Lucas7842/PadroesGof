
# Subsistema 1
class SistemaPagamento:
    def processarPagamento(self, valor):
        print(f"Processando pagamento no valor de R${valor}")

# Subsistema 2
class SistemaLogistica:
    def enviarProduto(self, destinatario):
        print(f"Enviar produto para {destinatario}")

# Subsistema 3
class SistemaNotificacao:
    def enviarEmail(self, destinatario, mensagem):
        print(f"Enviando e-mail para {destinatario}: {mensagem}")

# Fachada
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()
    
    def realizarCompra(self, produto, destinatario):
        self.pagamento.processarPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido de {produto['nome']} foi enviado.")
        
# CLIENTE ###########
loja = LojaOnline()

produto = {
    'nome':'Calsinha',
    'preco':49.99
}

destinatario = 'VitorMaricona2424@gay.com'

loja.realizarCompra(produto, destinatario)




