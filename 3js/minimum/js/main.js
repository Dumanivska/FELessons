//1
let inputAge = +prompt("Скільки тобі років?");
if (inputAge >=1 & inputAge <=11 ){
    alert("Ви дитина");
}
else if (inputAge >= 11 & inputAge <=17) {
    alert ("Ви підліток");
}
else if (inputAge >= 18 & inputAge <=59) {
    alert ("Ви дорослий");
}
else if (inputAge >= 60) {
    alert ("Ви пенсіонер");
}
else {
    alert ("Ви ввели невірні дані");
}
//2
let inputNumber = +prompt("Введіть число від 1 до 9",0);
switch (inputNumber) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert(`(`);
        break;
    default:
        alert("Ви ввели невірний символ");
        break;
}
//3 
let inputRange_bottom = +prompt("Введіть перший діапазон");
let inputRange_top = +prompt("Введіть другий діапазон");
let summ=0;
while (inputRange_bottom<inputRange_top){
    inputRange_bottom++;
    summ+=inputRange_bottom;
}
alert(summ);
//4 
let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");
let result;
while(firstNumber!=secondNumber){
    if(firstNumber>secondNumber){
        firstNumber = firstNumber - secondNumber;
    }
    else {
        secondNumber = secondNumber - firstNumber;
    }
}
result = firstNumber;
alert(result);
//5
let number = +prompt('Введіть число');
let x="";
for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
        x+=i + " ";
    }
}
alert(x);
