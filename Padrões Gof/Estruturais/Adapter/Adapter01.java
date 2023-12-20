// Interface do Cliente
interface ITarget {
    void request();
}

// Cliente
class Client {
    private ITarget target;

    public Client(ITarget target) {
        this.target = target;
    }

    public void makeRequest() {
        System.out.println("Fazendo uma Requisição");
        target.request();
    }
}

// Serviço Existente (Adapter)
class Adaptee {
    public void specificRequest() {
        System.out.println("Requisição Específica do Adaptee");
    }
}

// Adaptador (Adapter)
class Adapter implements ITarget {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// Classe de teste
public class Adapter01 {
    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        ITarget adapter = new Adapter(adaptee);
        Client client = new Client(adapter);

        client.makeRequest();
    }
}
