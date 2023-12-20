# Subsistema 1
class SistemaAutenticacao:
    def autenticar(self, usuario, senha):
        if usuario == "usuário" and senha == "senha":
            print('Autenticação bem-sucedida.')
            return True
        else:
            print("Autenticação falhou.")
            return False

# Subsistema 2
class SistemaCadastro:
    def cadastrarUsuario(self, usuario, senha):
        print(f"Usuário {destinatario} cadastrado com sucesso.")

# Subsistema 3
class SistemaPedidos:
    def fazerPedido(self, produtos, destinatario):
        produtos_str = ', '.join([produto['nome'] for produto in produtos])
        print(f"Pedidos {produtos_str} realizados para {destinatario}.")

# Subsistema 4
class SistemaPagamento:
    def processoPagamento(self, precos, destinatario):
        precos_str = ', '.join([f'R$ {preco:.2f}' for preco in precos])
        print(f"Processamento de pagamento nos valores {precos_str}: Pedido enviado para {destinatario}")

# Fachada
class LojaOnline:
    def __init__(self):
        self.autenticacao = SistemaAutenticacao()
        self.cadastro = SistemaCadastro()
        self.pedidos = SistemaPedidos()
        self.pagamento = SistemaPagamento()

class AtendimentoCliente:
    def __init__(self):
        self.loja = LojaOnline()

    def atendimentoCliente(self, usuario, senha, produtos, destinatario):
        if self.loja.autenticacao.autenticar(usuario, senha):
            self.loja.cadastro.cadastrarUsuario(usuario, senha)
            self.loja.pedidos.fazerPedido(produtos, destinatario)
            self.loja.pagamento.processoPagamento([produto['preco'] for produto in produtos], destinatario)
        else:
            print("Falha na autenticação. Não é possível continuar.")

# Cliente - Exemplo de uso
loja = LojaOnline()
cliente = AtendimentoCliente()

usuario = "usuário"
senha = "senha"

produtos = [
    {
        'nome': 'Iphone',
        'preco': 4800.00,
    },
    {
        'nome': 'TV',
        'preco': 1500.00,
    },
    {
        'nome': 'Ventilador',
        'preco': 800.00,
    }
]
destinatario = "Gladriel245@hotmail.com"

cliente.atendimentoCliente(usuario, senha, produtos, destinatario)
