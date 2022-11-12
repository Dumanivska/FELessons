//1 
let inputNumber = prompt("Введіть п'ятизначне число");
if (inputNumber >= 9999 && inputNumber <= 100000)
{
    polyNumber = inputNumber.split('').reverse().join('');
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





//3