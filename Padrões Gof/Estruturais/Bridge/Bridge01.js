// Implementação da interface de cor
class Color{
  constructor(color){
      this.color = color;
  }

  getColor(){
      return this.color;
  }
}

// Implementações concretas de cores
class RedColor extends Color {
  constructor(){
      super("Red");
  }
}

class BlueColor extends Color{
  constructor(){
      super("Blue");
  }
}

class GreenColor extends Color{
  constructor(){
      super("Green");
  }
}

// Implementação da interface de forma
class Shape{
  constructor(color){
      this.color = color;
  }

  setColor(color){
      this.color = color;
  }

  draw(){
      throw new Error("Este método precisa ser implementado pela subclasse");
  }
}

// Abstraões Refinadas
class CircleShape extends Shape{
  draw(){
      console.log(`Desenhando um circulo ${this.color.getColor()}.`);
  }
}

class SquareShape extends Shape {
  draw(){
      console.log(`Desenhando um quadrado ${this.color.getColor()}.`);
  }
}
// Cliente - Utilização do método #######################
const red = new RedColor();
const blue = new BlueColor();
const green = new GreenColor();

const circle1 = new CircleShape(red);
const circle2 = new CircleShape(green);
const square1 = new SquareShape(blue);
const square2 = new SquareShape(red);

circle1.draw();
circle2.draw();
square1.draw();
square2.draw();