// 1
{let num = +prompt('Введіть свій номер'),
    sum = 0;


let checkPerfectNumber = function (a) {
    for(i = 1;i < a - 1; i++){
        if(a%i == 0){
            sum += i;
        }
    }
    if(a === sum){
        alert(a + " ідеально");
    }else{
        alert(a + ' Не ідеально')
    }
}
let cheksNumber =checkPerfectNumber(num);
}


// console.log(checkPerfectNumber(num))
// let num1 = +prompt('Enter your number');
// function perfectNum(num){
//     let sum = 0;
//     let reminder;
//     for(let i =1 ;i<num-1;i++){
//         reminder = num%i;
//         if(reminder === 0){
//             sum +=i;
//         }
//     }
//     if (num === sum){
//         alert(num + 'perfect');
//     }else {
//         alert('net')
//     }
// }
// perfectNum(num1);

{confirm("Ви володієте діапазоном");
let min = +prompt('Введіть мінімальне значення для діапазону'),
    max = +prompt('Введіть максимальне значення для діапазону');
    sum = 0,
    list = [],
    sum = 0;

function showPerfectFromRange(a, b) {

    for (let i = a; i <= b; i += 1) {
        list.push(i);
    }
    if (a > b || a == b) {
        alert('Мінімальна щогла буде меншою за макс')
    }
    return list;
}
let result = showPerfectFromRange(min, max);
console.log(result);
// let filter = list.filter(function (a) {
//     for (i = 1; i < a - 1; i++) {
//         if (a % i == 0) {
//             sum += i;
//         }
//     }
//     if (a === sum) {
//         alert(a + " Perfect");
//     } else {
//         alert(a + ' Not Perfect')
//     }
// });
// console.log(filter)
let filter = list.filter(function perfectNum(num){
        let sum = 0;
        let reminder;
        for(let i =1 ;i<num-1;i++){
            reminder = num%i;
            if(reminder === 0){
                sum +=i;
            }
        }
        if (num === sum){
            alert(num + ' ідеально');
        }else {
            alert(num + ' Не ідеально')
        }
    });
    console.log(filter)
}

