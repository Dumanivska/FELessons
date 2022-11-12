//1 
let a = 0.1, b = 0.2;
let c = (a + b)*10/10;
alert('Правильна відповідь: ' + Math.floor(c * 10) / 10);
//2 
let firstSymbol = "1";
let inputFirst = Number(firstSymbol);
let seconsSymbol = 2;
let result = inputFirst + seconsSymbol;
alert('Правильна відповідь: ' + result);
//3 
let number_GB = prompt("Введіть кількість gb", 0);
const my_Const = 1024;
let number_MB = number_GB * my_Const;
let number_Files = number_MB/820;
alert('Файлів поміститься ' + number_Files.toFixed(1));