// let cars = ['Malibu', 'Damas', 'Nexia2', 'Gentra'];
// // for (let i = 0; i < cars.length; i++) {
// //     console.log(cars[i]);
// // };
let aralash = [1, 2, 3, "It is string!", true];
let str = [];
let nums = [];
let bool = [];
for (let i = 0; i < aralash.length; i++) {
  if (typeof aralash[i] === "number") {
    nums.push(aralash[i]);
  } else if (typeof aralash[i] === "string") {
    str.push(aralash[i]);
  } else if (typeof aralash[i] === "boolean") {
    bool.push(aralash[i]);
  }
}
console.log(str, "string");
console.log(nums, "number");
console.log(bool, "boolean");
