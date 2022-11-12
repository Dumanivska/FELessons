// 2
// function showArgu(a,b,c){
//     console.log(showArgu.length);
// }
// showArgu();
let showArgu =(a,b,c) => alert(showArgu.length);
showArgu()

//3
{let num1 = prompt('Введіть перше число');
    num2 = prompt('Введіть друге число');
    function showNumber(a,b){
        if(a < b){
          return alert("-1")
        }else if (a > b){
            return alert('1')
        }else if(a = b){
            return alert('0')
        }else {
            alert('Error');
        }
      }
     showNumber(num1,num2);}

// 4
{let num = prompt('Введіть свій номер');

let factorial = function (n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
alert(factorial(num))}

// 5
{let num1 = prompt('Введіть свій перший номер');
    num2 = prompt('Введіть свій другий номер');
    num3 = prompt('Введіть свій третій номер');

let conectNumbers = function(a,b,c){
    if(a === 0 || b === 0 || c === 0){
        return alert('Введіть усі свої цифри правильно');
    }else {
     return alert(a + b +c)
    }
}
conectNumbers(num1,num2,num3)}

// 6
{let fistSide = +prompt('Введіть прямокутник з першою стороною');
    secondSide = +prompt('Введіть другу сторону прямокутника');

function calcArea(a,b){
    if ( a == '' && b == '' ){
        alert ('Порожньо! Будь ласка, введіть свій номер');
    }else if(a == '' || b == ''){
      return (a*4);
    }else{
       return (a*b);
    }
}
let area = calcArea(fistSide,secondSide);
if (isNaN(area)){
    alert("Ви не можете використовувати букви або символи")
}else {
    alert(area);
}}

