//
// Object Desctructuring
//

const person = {
  name: 'Ricky',
  age: 30,
  location: {
    city: 'Washington DC',
    temp: 77,
  },
};

const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  // console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'The Illiad',
  author: 'Homer',
  publisher: {
    name: 'Penguin',
  },
};

const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Desctructuring
//

const address = ['4321 Sheel Terrace', 'Sterling', 'Virginia', '20164'];
const [, city1, state = 'New York'] = address;
console.log(`You are in ${city1} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
