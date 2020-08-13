// function getMaxProfit(stockPrices) {
//   let lowest = stockPrices[0];
//   let highest = stockPrices[0];

//   for (let i = 1 ; i < stockPrices.length; i++) {
//     const stockPrice = stockPrices[i];
//     if (stockPrice < lowest) {
//       lowest = stockPrice;
//       highest = stockPrice;
//     }
//     else if (stockPrice > highest) {
//       highest = stockPrice;
//     }
//   }

//   return highest - lowest;
// }

function getMaxProfit(stockPrices) {

  if (stockPrices.length <= 1) return new Error();

  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
    const buyPrice = stockPrices[earlierTime];

    for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++) {
      const sellPrice = stockPrices[laterTime];
      if (sellPrice > buyPrice) {
        const potentialProfit = sellPrice - buyPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
      }
    }
  }
  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9, 15];
console.log(getMaxProfit(stockPrices));

function translateIndexToTime(index) {
  const minutes = index + 570;
  const hours = Math.floor(570 / 60);
  const remainingMinutes = 570 % 60;
  return `${hours}:${remainingMinutes}`;
}

translateIndexToTime(0);