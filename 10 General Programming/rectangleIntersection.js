function rectangleIntersection(rec1, rec2) {
    const recIntersection = {};

    // Determine horizontal intersection.
    const leftMostRec = rec1.leftX <= rec2.leftX ? rec1 : rec2;
    const leftMostRecRight = leftMostRec.leftX + leftMostRec.width;
    const rightMostRec = leftMostRec === rec1 ? rec2 : rec1;
    if (!(rightMostRec.leftX < (leftMostRecRight))) {
        return null;
    }
    else {
        recIntersection.leftX = rightMostRec.leftX;
        recIntersection.width = leftMostRecRight - rightMostRec.leftX;
    }

    // Determine Vertical intersection.
    const bottomMostRec = rec1.bottomY <= rec2.bottomY ? rec1 : rec2;
    const bottomMostRecTop = bottomMostRec.bottomY + bottomMostRec.height;
    const topMostRec = bottomMostRec === rec1 ? rec2 : rec1;
    recIntersection.bottomY = topMostRec.bottomY;
    recIntersection.height = bottomMostRecTop - topMostRec.bottomY;

    return recIntersection;

}

const rec1 = {
    leftX : 1,
    bottomY: 1,
    width: 6,
    height: 3
}

const rec2 = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    height: 6
}

rectangleIntersection(rec1, rec2);