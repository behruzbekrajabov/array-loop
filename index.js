// // let cars = ['Malibu', 'Damas', 'Nexia2', 'Gentra'];
// // // for (let i = 0; i < cars.length; i++) {
// // //     console.log(cars[i]);
// // // };
// let aralash = [1, 2, 3, "It is string!", true];
// let str = [];
// let nums = [];
// let bool = [];
// for (let i = 0; i < aralash.length; i++) {
//   if (typeof aralash[i] === "number") {
//     nums.push(aralash[i]);
//   } else if (typeof aralash[i] === "string") {
//     str.push(aralash[i]);
//   } else if (typeof aralash[i] === "boolean") {
//     bool.push(aralash[i]);
//   }
// }
// console.log(str, "string");
// console.log(nums, "number");
// console.log(bool, "boolean");
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let toq = [];
// let juft = [];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2){
//         juft.push(numbers[i]);
//     }else {
//         toq.push(numbers[i])
//     }
// } 
// console.log(juft);
// console.log(toq);
let raqamlar = [1, 2, 3, 4, 5, 6, 654, 234, ];
let n = raqamlar[0];
for (let i = 0; i < raqamlar.length; i++) {
    if (n < raqamlar[i]) {
        n = raqamlar[i]
    }    
}
console.log(n)