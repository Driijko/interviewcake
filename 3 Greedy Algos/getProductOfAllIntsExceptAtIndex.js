function getProductsOfAllIntsExceptAtIndex(intArray) {

  const products = [];
  for (let i = 0 ; i < intArray.length; i++) {
    let product = 1;
    for (let j = 0 ; j < intArray.length; j++) {
      if (j !== i) {
        product *= intArray[j];
      }
    }
    products.push(product);
  }  

  return products;
}

const intArray = [1, 2, 3, 4, 5];
console.log(getProductsOfAllIntsExceptAtIndex(intArray));