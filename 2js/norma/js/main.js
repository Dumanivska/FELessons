// 1
let input_Money = prompt('Введіть кількість ваших грошей', 0);
let input_Chock = prompt('Введіть ціну 1 шоколадки', 0);
let number_Chock = Math.floor(input_Money/input_Chock);
let number_Absolute = input_Chock * number_Chock;
let  number_Change = input_Money - number_Absolute;
alert(`Кількість шоколадок ${number_Chock}, Решта : ${number_Change}`);
// 2 
let input_Number = prompt('Введіть тризначне число', 0);
alert(`Число задом наперед ` + input_Number.split('').reverse().join(''));