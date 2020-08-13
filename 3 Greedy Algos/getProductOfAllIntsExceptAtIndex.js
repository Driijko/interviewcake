// function getProductsOfAllIntsExceptAtIndex(intArray) {

//   const products = [];
//   for (let i = 0 ; i < intArray.length; i++) {
//     let product = 1;
//     for (let j = 0 ; j < intArray.length; j++) {
//       if (j !== i) {
//         product *= intArray[j];
//       }
//     }
//     products.push(product);
//   }  

//   return products;
// }

function getProductsOfAllIntsExceptAtIndex(intArray) {
  let totalProduct = 1;
  const products = [];
  for (let i = 0; i < intArray.length; i++) {
    totalProduct *= intArray[i];
  }
  for (let i = 0; i < intArray.length; i++) {
    products[i] = Math.floor(totalProduct / intArray[i]);
  }
  return products;
}

const intArray = [1, 2, 3, 4, 5];
console.log(getProductsOfAllIntsExceptAtIndex(intArray));