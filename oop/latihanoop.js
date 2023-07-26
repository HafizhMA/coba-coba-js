class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }
  eat() {
    console.log(`${this.name} sedang makan`);
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }
  fly() {
    console.log(`${this.name} sedang terbang`);
  }
}

const myRabbit = new Rabbit("Sucipto", 2);
const myEagle = new Eagle("Cahyo", 4);

console.log(myRabbit);
console.log(myEagle);
