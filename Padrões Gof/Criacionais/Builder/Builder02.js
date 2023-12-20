// Código de exemplo usando o JS no padrão de projeto Builder para uma Pizzaria
// Definir partes de uma pizza
class Massa{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}
class Sabor{
    constructor(tipo){
        this.tipo = tipo;
    }
}
class Borda{
    constructor(espessura){
        this.espessura = espessura;
    }
}

// Builder
class PizzaBuilder{
    constructor(){
        this.massa = null;
        this.sabor = null;
        this.borda = null;
    }

adicionarMassa(tamanho){
    this.massa = new Massa(tamanho);
    return this;
}

adicionarSabor (tipo){
    this.sabor = new Sabor(tipo);
    return this;
}

adicionarBorda (espessura){
    this.borda = new Borda(espessura);
    return this;
}

construir(){
    return new Pizza(this.massa, this.sabor, this.borda)
 }
}

// Fazendo uma pizza
class Pizza{
    constructor(massa, sabor, borda){
        this.massa = massa;
        this.sabor = sabor;
        this.borda = borda;
    }

    mostrarDetalhes(){
        console.log(`Pizza com massa ${this.massa.tamanho}, sabor ${this.sabor.tipo}, 
        e borda de espessura ${this.borda.espessura}.`);
    }
}

// Exemplo de uso ##############
const builder = new PizzaBuilder();

const pizza01 = builder
.adicionarMassa('Fina')
.adicionarSabor('Quatro Queijos')
.adicionarBorda('Grande')
.construir();

const pizza02 = builder
.adicionarMassa('Grossa')
.adicionarSabor('Portuguesa')
.adicionarBorda('Pequena')
.construir();

const pizza03 = builder
.adicionarMassa('Grossa')
.adicionarSabor('Calabresa')
.adicionarBorda('Média')
.construir();

pizza01.mostrarDetalhes();
pizza02.mostrarDetalhes();
pizza03.mostrarDetalhes();