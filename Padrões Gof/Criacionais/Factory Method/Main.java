// Classe base de veículo
class Veiculo {
    protected String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes() {
        System.out.println("Modelo: " + this.modelo);
    }
}

// Subclasses de veículo
class Carro extends Veiculo {
    public Carro(String modelo) {
        super(modelo);
    }
}

class Moto extends Veiculo {
    public Moto(String modelo) {
        super(modelo);
    }
}

// Fabrica abstrata de veículos
abstract class FabricaDeVeiculos {
    public abstract Veiculo criarVeiculo(String modelo);
}

// Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Carro(modelo);
    }
}

// Fabrica concreta de motos
class FabricaDeMotos extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Moto(modelo);
    }
}

public class Main {
    public static void main(String[] args) {
        FabricaDeVeiculos fabricaDeCarros = new FabricaDeCarros();
        Veiculo carro = fabricaDeCarros.criarVeiculo("Sedan");
        carro.mostrarDetalhes();

        FabricaDeVeiculos fabricaDeMotos = new FabricaDeMotos();
        Veiculo moto = fabricaDeMotos.criarVeiculo("Esportiva");
        moto.mostrarDetalhes();
    }
}
