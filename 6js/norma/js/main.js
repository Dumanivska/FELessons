//1
let productDel = prompt('Введіть назву продукту, який ви хочете видалити');
let newProductList = productList.slice();
function deleteProduct (a){
    for(i = 0 ; i < productList.length ; i++){
      if( a == 0 ){
          return alert('Введіть правильну назву')
      }else if(newProductList[i].name == a && productList[i].bought == true){
        alert ('Ви видаляєте цей продукт');
     newProductList.splice(i,1);
     return newProductList
          break; 
      }
    }
}
deleteProduct(productDel)
console.log(newProductList)
//2
let yourProduct = prompt('Введіть назву продукту ');
function buyNewProduct (a){
    for(i = 0 ; i < productList.length ; i++){
        if (a == 0 || a == " "){
            alert( "Введіть правильну назву продукту");
            break;
        }else if(a == productList[i].name){
            productList[i].amount++;
        }else if (productList[i].name !== a ){
            return productList.push(new product);
        }
    } 
}
buyNewProduct(yourProduct);
function addProduct(a){
    let x = (productList.length - 1);
    console.log(x)
    productList[x].name = a;
}
addProduct(yourProduct)
console.log(productList)