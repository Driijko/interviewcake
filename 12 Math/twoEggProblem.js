const numFloors = 100;

const highestFloor = Math.floor(Math.random() * numFloors) + 1;

function dropEggTest(highestFloor) {

    console.log("highest floor is ", highestFloor);

    let eggs = 2;
    let egg1Floor = 0;
    let egg2Floor = 0;

    while (eggs > 0) {
        if (eggs === 2) {
            egg2Floor += 10;
            if (egg2Floor > highestFloor) {
                eggs--;
            }
            else {
                egg1Floor = egg2Floor;
            }
        }

        egg1Floor++;
        if (egg1Floor > highestFloor) {
            eggs--;
            return highestFloor;
        }
    }

}


console.log(dropEggTest(highestFloor));