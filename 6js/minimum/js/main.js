let productList = [];
function product(name,amount,price,bought){
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.bought = bought;
    this.summa = 0;
    this.calculateSumma = () => this.summa = this.amount * this.price;
    this.calculateSumma()
};
productList[0] = new product('хліб', 2, 5, true);
productList[1] = new product('апельсин', 1, 15, true);
productList[2] = new product('картопля', 0, 3, false);
productList[3] = new product('банан', 6, 1, true);
productList[4] = new product('молоко', 0, 13, false);
console.log(productList)

// 1
    function sortProduct(a) {
        if (a.bought == true) {
            return -1;
        }
        if (a.bought !== true) {
            return 1;
        }
        return 0;
    }
productList.sort(sortProduct);
//2
let nameProduct = prompt('Введіть назву продукту');
function buyProduct (a){
  for(i = 0 ; i < productList.length ; i++){
    let x = productList[i].amount
    if( a == 0 ){
        return alert('Введіть правильну назву')
    }else if(productList[i].name == a && productList[i].bought == true){
      alert ('Ви вже купили цей товар');
      return productList[i].amount++
        break;   
    }else if(productList[i].bought !== true){
      alert('Ви купили це ' + a );
      return  productList[i].amount++;
      productList[i].bought = true;
       
    }
  }
};
console.log(buyProduct(nameProduct))
console.log(productList)