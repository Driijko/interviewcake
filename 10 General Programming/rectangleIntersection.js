function rectangleIntersection(rec1, rec2) {

    const hOverlap = rangeOverlap(rec1.leftX, rec1.width, rec2.leftX, rec2.width);
    if (!(hOverlap)) {
        return null;
    }
    const vOverlap = rangeOverlap(rec1.bottomY, rec1.height, rec2.bottomY, rec2.height);

    const recIntersection = {
        leftX : hOverlap.coor,
        bottomY: vOverlap.coor,
        width: hOverlap.range,
        height: vOverlap.range
    }

    return recIntersection;

}

function rangeOverlap(coor1, range1, coor2, range2) {
    const highestStartPoint = Math.max(coor1, coor2);
    const lowestEndPoint = Math.min(coor1 + range1, coor2 + range2);
    if (lowestEndPoint <= highestStartPoint) {
        return null;
    }
    else {
        return {
            coor: highestStartPoint,
            range: lowestEndPoint - highestStartPoint
        }
    }
}

const rec1 = {
    leftX : 1,
    bottomY: 1,
    width: 6,
    height: 3
}

const rec2 = {
    leftX: 7,
    bottomY: 2,
    width: 3,
    height: 6
}

// console.log(rangeOverlap(rec1.leftX, rec1.width, rec2.leftX, rec2.width));
console.log(rectangleIntersection(rec1, rec2));