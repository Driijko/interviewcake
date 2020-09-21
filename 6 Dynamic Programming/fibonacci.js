function fib(n) {

  const memo = {};
  let functionCalls = 0;

  function recursiveCall(n) {
    functionCalls++;

    // Base Case
    if (n === 0 || n === 1) {
      return n;
    }
    // Recursive Case
    else {
      memo[n] = (
        (memo[n - 1] ? memo[n - 1] : recursiveCall(n - 1))
        + (memo[n - 2] ? memo[n - 2]: recursiveCall(n - 2))
      )
      return memo[n];
    } 
  }
  
  const result = recursiveCall(n);
  console.log(`${functionCalls} function calls made`);
  return result;
}

console.log(fib(5));