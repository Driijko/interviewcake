function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("Getting a profit requires at least two prices");
  }
  let maxProfit = stockPrices[1] - stockPrices[0];
  let lowest = stockPrices[0];

  for (let i = 1 ; i < stockPrices.length; i++) {
    const currentStockPrice = stockPrices[i];
    const currentSellProfit = currentStockPrice - lowest;
    maxProfit = Math.max(currentSellProfit, maxProfit);
    lowest = Math.min(currentStockPrice, lowest);
  }
  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9, 15];
console.log(getMaxProfit(stockPrices));