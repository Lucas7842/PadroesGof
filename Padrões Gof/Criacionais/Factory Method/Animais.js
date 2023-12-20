// especies
class Especie{
  constructor(animal){
    this.animal = animal;
  }
  mostrarDetalhes() {
    console.log(`Animal: ${this.animal}`);
}
}

//subclasses de especies
class Leoa extends Especie{
  constructor(animal){
  super(animal);
}
}
class Orca extends Especie{
  constructor(animal){
    super(animal);
  }
}

//abstrata de especie
class TiposDeEspecies{
  criarEspecie(animal){
    throw new Error('o animal já foi criado');

  }
}
 // Leoas
 class TiposDeLeoas extends TiposDeEspecies{
  criarEspecie(animal){
    return new Leoa(animal);
  }
 }

 //Orcas
 class TiposDeOrcas extends TiposDeEspecies{
  criarEspecie(animal){
    return new Orca(animal);
  }
 }

 //Uso das especies
 const tiposDeLeoas = new TiposDeLeoas();
 const leoa = tiposDeLeoas.criarEspecie('Leoa');
 leoa.mostrarDetalhes();

 const tiposDeOrcas = new TiposDeOrcas();
 const orca = tiposDeOrcas.criarEspecie('Orca');
 orca.mostrarDetalhes();