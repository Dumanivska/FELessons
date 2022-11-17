// 
let car ={
    manufacturer:"Jetour",
    model:"X70",
    year: 2021,
    speed: 180,
    'fuel tank':1,
    'fuel consumption':5,
    driver:"Andrew"
}
    // 1
    car.aboutCar = function(){
        return alert(this.manufacturer + ' ' + this.model + ' ' + this.year +' year.Have middle speed  '+ this.speed +' and fuel tank :' + this["fuel tank"] +"litre." + " Fuel consumption per 100 km approximately:  " + this["fuel consumption"]+ " litre.")
    };
    car.aboutCar();
    //2 
    car.newDriver = function(a){
        if (a == null || a == ''){
            return alert('Будь ласка, введіть правильну назву')
       }else{
        this.driver == (a);
        return alert("Name " + this.driver + " change to " + a );
       }
    };
    let newName = prompt('Введіть нове Name драйвера');
    car.newDriver(newName);
    car.driver = newName; 
     // 3
     car.checkName = function(){
        while(true){
            let checkDriver = prompt('Введіть Name водія для перевірки');
            if(checkDriver == this.driver)
            return alert('Yes ' + this.driver + " correct name !")
            break;
        }
        return alert('Вибачте! Ви не праві. Спробуйте ще раз');
    };
    car.checkName();

    //4
    let distance = +prompt('Distance?');
car.calcFuel = function(a){
    return ((a * this["fuel consumption"])/this.speed)
};
car.calcFuel(distance);
car.calcTime = function(a){
    return (a / this.speed)
}
car.calcTime(distance);
let timeForDistance = car.calcTime(distance);
car.restTime = function(){
    return (timeForDistance / 4)
}
car.restTime();
let restTime = car.restTime(distance);
car.allTime = function(){
    return (timeForDistance - restTime)
}
car.allTime();
let optimalTime = Math.ceil(car.allTime(distance));
let fuelDistance = Math.floor(car.calcFuel(distance));
confirm("If you would like drive" + car.manufacturer +" " + car.model  + " for distance " + distance + " you need :"  + fuelDistance + " litre petrol.And if you will lucky , after " + optimalTime + " hours  you will drive whole distance")