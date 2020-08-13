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

  const productsOfIntsAfterIndex = [];
  productSoFar = 1;
  for (let i = intArray.length - 1; i > -1; i--) {
    productsOfIntsAfterIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  for (let i = 0 ; i < intArray.length; i++) {
    productsOfIntsAfterIndex[i] = productsOfIntsAfterIndex[i] * productsOfIntsBeforeIndex[i];
  }

  return productsOfIntsAfterIndex;

}

const intArray = [1, 2, 3, 4, 5];
console.log(getProductsOfAllIntsExceptAtIndex(intArray));