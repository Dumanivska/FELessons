//1
date = new Date ();
Hour = date.getHours();
Minutes = date.getMinutes();
Seconds = date.getSeconds();
showTime = function(){
   alert("Time now " + Hour + ":" + Minutes + ":" + Seconds);
}
showTime();
//2
changesecond = function(){
    let secondChange = (date.getSeconds() - 15);
    alert("Time now " + Hour + ":" + Minutes + ":" + secondChange);
 
}
changesecond()
// 3
changeMiinuts = function(){
    let minute = (date.getMinutes() + 7)
    alert("Time now " + Hour + ":" + minute + ":" + Seconds);
}
changeMiinuts()
// 4
changeHour = function(){
let hours = (date.getHours() + 1);
alert("Time now " + hours + ":" + Minutes + ":" + Seconds);
}
changeHour()


//5