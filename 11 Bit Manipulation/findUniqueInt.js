function findUniqueDeliveryId(deliveryIds) {
    const idTracker = new Set();
    for (let i = 0 ; i < deliveryIds.length ; i++) {
        if (idTracker.has(deliveryIds[i])) {
            idTracker.delete(deliveryIds[i]);
        }
        else {
            idTracker.add(deliveryIds[i]);
        }
    }

    let uniqueId = null
    idTracker.forEach(id => {
        uniqueId = id;
    })
 
    return uniqueId;
}

const deliveryIds = [0, 3, 2, 6, 5, 1, 8, 9, 7, 4, 3, 9, 8, 1, 2, 6, 5, 7, 0];

console.log(findUniqueDeliveryId(deliveryIds));