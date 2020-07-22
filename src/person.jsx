// export const isAdult = (age) => {
//   let adult;
//   if (age > 18) {
//     return (adult = true);
//   } else {
//     return (adult = false);
//   }
// };

// export const canDrink = (age) => {
//   let ableToDrink;
//   if (age >= 21) {
//     return (ableToDrink = true);
//   } else {
//     return (ableToDrink = false);
//   }
// };

export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;
export default isSenior;
