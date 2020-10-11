function changePossibilitiesBottomUp(amount, denominations) {

  const results = new Array(amount + 1).fill(0);
  results[0] = 1;

  for (const coin of denominations) {
    for (let higherAmount = coin ; higherAmount <= amount ; higherAmount++) {
      const remainder = higherAmount - coin;
      results[higherAmount] += results[remainder];
    }
  }

  return results[amount];
}


console.log(changePossibilitiesBottomUp(5, [1, 2, 3]));
