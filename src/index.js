import "./styles.css";

class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }
  getName() {
    return `The car's name is: ' + super.getName()`;
  }
}
let car = new Car("i10");
document.getElementById("app").innerHTML = `
<h1>Hello ${car.name}!</h1>
<p>Example: A car is a vehicle can be modeled with inheritance.</p>
`;
