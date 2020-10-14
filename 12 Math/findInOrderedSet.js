function contains(array, value) {

    if (array.length < 1) {
        return false;
    }
    else if (array.length === 1) {
        return array[0] === value;
    }

    let floor = 0;
    let ceiling = array.length - 1;

    while (floor <= ceiling) {

        const median = Math.floor((floor + ceiling) / 2);

        console.log(floor, ceiling, median);

        if (array[median] === value) {
            return true;
        }
        else if (array[median] < value) {
            floor = median + 1;
        }
        else if (array[median] > value) {
            ceiling = median - 1;
        }
    }

    return false;
  
}

const nums = [0, 1, 2, 3, 4, 5];

console.log(contains(nums, 5));