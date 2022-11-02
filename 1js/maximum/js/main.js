// 1
let radius = prompt("Введіть радіус кола", 0);
const numberP = 3.14;
let square = numberP * radius * 2;
console.log("Площа круга дорівнює " + square);
// 2
let distance = prompt("Які відстань в кілометрах між двома містам ", 0);
let time = prompt("За скільки годин Вам потрібно добратися", 0);
let speed = distance / time;
console.log("Вам потрібно їхати зі швидкістю " + speed + " км/г");
// 3
let usd = prompt("Введіть кількість долларів", 0);
const Exchange = 1.01;
let euro = usd * Exchange;
console.log("Ми дамо вам " + Math.round(euro * 100)/100 + " euro");