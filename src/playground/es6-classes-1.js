console.log('classes-1');

class Person {
  // constructor function gets called every time we create a new instance if we want to do something with the data we are passing in
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return `Hi, I am ` + this.name + `!`;
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  // overriding the constructor
  // we must call the parent constructor first
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

// new instance of class
const me = new Traveler('Ricky Torrez', 30, 'Washington DC');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
