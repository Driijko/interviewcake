function findRepeat(numbers) {

    const n = numbers.length - 1;

    const triangularSum = (Math.pow(n, 2) + n) / 2;
    
    const sum = numbers.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    })

    return sum - triangularSum;
}

const numbers = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10];

console.log(findRepeat(numbers));