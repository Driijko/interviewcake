const numFloors = 100;

const highestFloor = Math.floor(Math.random() * numFloors) + 1;

function dropEggTest(numFloors, highestFloor) {

    console.log("highest floor is ", highestFloor);

    let eggs = 2;
    let lastSafeFloor = 1;
    let currentFloor = 1;
    let floor = 0;
    let ceiling = numFloors;
    let counter = 0;

    while (eggs > 0) {

        counter++;
        console.log(`Trial ${counter}`)

        if (eggs === 2) {
            currentFloor = Math.floor((floor + ceiling) / 2);
            if (currentFloor > highestFloor) {
                eggs--;
                currentFloor = lastSafeFloor;
                console.log("broke first egg!")
            }
            else if (currentFloor <= highestFloor) {
                floor = currentFloor + 1;
                lastSafeFloor = currentFloor;
            }
        }
        else if (eggs === 1) {
            currentFloor++;
            if(currentFloor > highestFloor) {
                eggs--;
            }
        }

        console.log(`${currentFloor}`)

    }

    return currentFloor - 1;

}


console.log(dropEggTest(numFloors, highestFloor));