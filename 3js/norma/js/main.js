//1 
let inputNumber = prompt("Введіть п'ятизначне число");
if (inputNumber >= 9999 && inputNumber <= 100000)
{
    polyNumber = inputNumber.split("").reverse().join("");
    if (inputNumber == polyNumber){
        alert('Це паліндром')
    }else {
        alert('Це не паліндром')
    }
}
else{
    alert("Ви ввели невірне число");
}

//2 
let inputPrice = +prompt("Введіть суму покупки");
let sale;
if (inputPrice >= 200 && inputPrice <= 300){
    sale = inputPrice - (inputPrice/100 *3);
    alert(`Сума до оплати: ${sale}`);
}
    else if (inputPrice >= 300 && inputPrice <= 500){
        sale = inputPrice - (inputPrice/100 *5);
    alert(`Сума до оплати: ${sale}`);
    }
    else if ( inputPrice > 500){
        sale = inputPrice - (inputPrice/100 *7);
    alert(`Сума до оплати: ${sale}`);
    }
    else{
        sale = inputPrice;
        alert(`Сума до оплати: ${sale}`);
    }
//3
let i, N;
let Q1 = 0;
let Q2 = 0;
let Q3 = 0;
let Q4 = 0;
let Q5 = 0;
let Q6 = 0;
for (i = 0; i < 10; i++) {
  N = +prompt("введіть 10 чисел: ", );

  if (N > 0) {
    Q1++; //=> NaN
  } else if  (N < 0) {
      Q2++; //=> NaN
    }
    else if (N == 0){
        Q3++;
    }
     if (N % 2 == 0){
        Q4++;
    }
    else if (N % 2 != 0){
        Q5++;
    }
}
if (Q1 > 0 || Q2 > 0 || Q3 > 0 || Q4 > 0 || Q5 > 0 ) {
  alert(`Кількість додатніх чисел:  ${Q1}\n  Кілкість від'ємних чисел:  ${Q2}\n  Кількість нулів:  ${Q3}\n
  Кількість парних:  ${Q4}\n  Кількість непарних:  ${Q5}\n`);
} else {
  alert("Помилка");
}

//4 завдання
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П"ятниця', 'Субота', 'Неділя'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хочете побачити наступний день?`)) {
  currDay = (currDay + 1) % days.length;
}
