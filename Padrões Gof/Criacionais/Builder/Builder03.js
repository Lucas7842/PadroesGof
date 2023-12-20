// Definir os objetos do Estudante
class Nome{
    constructor(aluno){
        this.aluno = aluno;
    }
}

class Matricula{
    constructor(numero){
        this.numero = numero;
    }
}

class Idade{
    constructor(anos){
        this.anos = anos;
    }
}

class Curso{
    constructor(area){
    this.area = area;
 }
}

class Periodo{
    constructor(horario){
        this.horario = horario;
    }
}

// Builder
class EstudanteBuilder{
    constructor(){
        this.nome = null;
        this.matricula = null;
        this.idade = null;
        this.curso = null;
        this.periodo = null;
    }

    adicionarNome(aluno){
        this.nome = new Nome(aluno);
        return this;
    }

    adicionarMatricula(numero){
        this.matricula = new Matricula(numero);
        return this;
    }

    adicionarIdade(anos){
        this.idade = new Idade(anos);
        return this;
    }

    adicionarCurso(area){
        this.curso = new Curso(area);
        return this;
    }

    adicionarPeriodo(horario){
        this.periodo = new Periodo(horario);
        return this;
    }

    construir(){
        return new Estudante(this.nome, this.matricula, this.idade, this.curso, this.periodo)
    }
}

// Uso do estudante
class Estudante{
    constructor(nome, matricula, idade, curso, periodo){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;
    }

    mostrarDetalhes(){
        console.log(`Estudante de nome ${this.nome.aluno}, matricula ${this.matricula.numero}, idade ${this.idade.anos},
        curso ${this.curso.area} e periodo ${this.periodo.horario}`);

    }
}

// Exemplo de uso ##################
const builder = new EstudanteBuilder();

const estudante01 = builder
.adicionarNome('Vitor')
.adicionarMatricula('019867')
.adicionarIdade(20)
.adicionarCurso('DSM')
.adicionarPeriodo('Matutino')
.construir();

const estudante02 = builder
.adicionarNome('Lucas')
.adicionarMatricula('763467')
.adicionarIdade(27)
.adicionarCurso('Geopolítica')
.adicionarPeriodo('Noturno')
.construir();

estudante01.mostrarDetalhes();
estudante02.mostrarDetalhes();