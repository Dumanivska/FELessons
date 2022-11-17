//1
let sum = 0;
function sumAllProduct(a){
    arr = [];
  for(i = 0 ; i < productList.length ; i++){
    if (productList[i].bought == true){  
sum += productList[i].summa
    }
  }
  return sum;
}
sumAllProduct(productList);
console.log(sum)
//2
let sumNotBought = 0;
function sumNotBoughts(a){
    arr =[];
    for(i = 0 ; i < productList.length ; i++){
        if (productList[i].bought == false){  
            sumNotBought += productList[i].summa
                }
              }
              return  sumNotBought;
    }
sumNotBoughts(productList);
console.log(sumNotBought)
//3
function compareNumbers(a, b) {
    return a.summa - b.summa;
  }
  productList.sort(compareNumbers);
  console.log(productList);
  productList.reverse(compareNumbers);
  console.log(productList)