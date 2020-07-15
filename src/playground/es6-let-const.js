var nameVar = 'Ricky';
var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Lucas';
console.log('nameConst', nameConst);

// function level scoped
function getPetName() {
  var petName = 'Puska';
  return petName;
}

// getPetName();
// console.log(petName);

// block level scoped
const fullName = 'Ricky Torrez';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
