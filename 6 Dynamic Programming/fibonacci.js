function fib(n) {

  const memo = {};

  function recursiveCall(n) {
    // Base Case
    if (n === 0 || n === 1) {
      console.log(`base case: ${n}`)
      return n;
    }
    else if (memo[n]) {
      console.log(`fetching fib(${n}) from memo`);
      return memo[n];
    }
    else {
      console.log(`calculating fib(${n})`);
      memo[n] = recursiveCall(n - 1) + recursiveCall(n - 2);
      return memo[n];
    } 
  }

  if (memo[n]) {
    return memo[n];
  }
  return recursiveCall(n);
}

console.log(fib(8));