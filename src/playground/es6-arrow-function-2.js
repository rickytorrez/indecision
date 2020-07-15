// arguments object - no longer bound with arrow functions
console.log('howdy');

// before
const add = function (a, b) {
  console.log(arguments);

  return a + b;
};

// after - with arrow functions
const add2 = (a, b) => {
  // console.log(arguments);   // Error => arguments are not defined
  return a + b;
};

console.log(add2(55, 1, 1001));

// this keyword

const user = {
  name: 'Ricky',
  cities: ['Sterling', 'Fairfax', 'McLean', 'D.C.'],
  printPlacesLived: function () {
    const that = this;

    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    });
  },
};

// ES6
const user2 = {
  name: 'Ricky',
  cities: ['Sterling', 'Fairfax', 'McLean', 'D.C.'],
  printPlacesLived() {
    // map lets you trans form the item
    return this.cities.map((city) => {
      this.name + ' has lived in ' + city;
    });
  },
};

console.log(user2.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
