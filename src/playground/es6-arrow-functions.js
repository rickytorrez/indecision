function squareES5(n) {
  return n * n;
}

const squareES6 = (n) => {
  return n * n;
};

const squareArrow = (n) => n * n;

console.log(squareES5(2));
console.log(squareES6(2));
console.log(squareArrow(8));

const getFirstName = (name) => {
  let firstName = name.split(' ')[0];
  return firstName;
};

const getFirstNameArrow = (name) => name.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameArrow('Sofia Torrez'));
