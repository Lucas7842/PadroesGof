// Componente
class ComponenteNotificador{
  enviar(mensagem){
    console.log(`Enviando Mensagem:${mensagem}`);
  }
}

// Decorator base
class DecoratorNotificador{
  constructor(componente){
    this.componente = componente;
  }

enviar(mensagem){
  this.componente.enviar(mensagem);
  }
}
// Decorator Concreto 1
class DecoratorNotificadorSMS extends DecoratorNotificador{
  enviar(mensagem){
    super.enviar(mensagem);
    console.log(`Enviar mensagem por SMS:${mensagem}`);
  }
}

// Decorator Concreto 2
class DecoratorNotificadorFacebook extends DecoratorNotificador{
  enviar(mensagem){
      super.enviar(mensagem);
      console.log(`Enviar mensagem pelo Facebook: ${mensagem}`);
    }
  }
// Cliente #############
const notificador = new ComponenteNotificador();
const notificadorComSMS = new DecoratorNotificadorSMS(notificador);
const notificadorComFacebook = new DecoratorNotificadorFacebook(notificadorComSMS)

notificadorComFacebook.enviar("Olá Mundo...");

