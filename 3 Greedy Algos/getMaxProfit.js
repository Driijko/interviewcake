function getMaxProfit(stockPrices) {
  let lowest = stockPrices[0];
  let highest = stockPrices[0];

  for (let i = 1 ; i < stockPrices.length; i++) {
    const stockPrice = stockPrices[i];
    if (stockPrice < lowest) {
      lowest = stockPrice;
      highest = stockPrice;
    }
    else if (stockPrice > highest) {
      highest = stockPrice;
    }
  }

  return highest - lowest;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));

function translateIndexToTime(index) {
  const minutes = index + 570;
  const hours = Math.floor(570 / 60);
  const remainingMinutes = 570 % 60;
  return `${hours}:${remainingMinutes}`;
}

translateIndexToTime(0);