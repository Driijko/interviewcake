// function getProductsOfAllIntsExceptAtIndex(intArray) {
//   let totalProduct = 1;
//   const products = [];
//   for (let i = 0; i < intArray.length; i++) {
//     totalProduct *= intArray[i];
//   }
//   for (let i = 0; i < intArray.length; i++) {
//     products[i] = Math.floor(totalProduct / intArray[i]);
//   }
//   return products;
// }

function getProductsOfAllIntsExceptAtIndex(intArray) {

  if (intArray.length < 2) {
    throw new Error("There must be at least two numbers in array");
  }

  const productsOfIntsBeforeIndex = [];
  let productSoFar = 1;
  for (let i = 0 ; i < intArray.length; i++) {
    productsOfIntsBeforeIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  const productsOfAllIntsExceptAtIndex = [];
  productSoFar = 1;
  for (let i = intArray.length - 1; i > -1; i--) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar * productsOfIntsBeforeIndex[i];
    productSoFar *= intArray[i];
  }

  return productsOfAllIntsExceptAtIndex;

}

const intArray = [1, 2, 3, 4, 5];
console.log(getProductsOfAllIntsExceptAtIndex(intArray));