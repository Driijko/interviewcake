function checkOrder(prepOrder, serveOrder) {
  let orderFound = false;
  let lastCheckedIndex = -1;
  for (let prepIndex = 0; prepIndex < prepOrder.length; prepIndex++) {
    for (let serveIndex = 0; serveIndex < serveOrder.length; serveIndex++) {
      if (prepOrder[prepIndex] === serveOrder[serveIndex]) {
        if (serveIndex > lastCheckedIndex) {
          lastCheckedIndex = serveIndex;
        }
        else {
          return false;
        }
        orderFound = true;
      }
    }
    if (orderFound === false) {
      return false;
    }
  }

  return true;
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  if (servedOrders.length > takeOurOrders.length + dineInOrders.length) {
    return false;
  }

  if (checkOrder(takeOutOrders, servedOrders) === false) {
    return false;
  }
  else if (checkOrder(dineInOrders, servedOrders) === false) {
    return false;
  }
  else {
    return true;
  }
}

const takeOutOrders =  [17, 8, 24];
const dineInOrders = [12, 19, 2];
const servedOrders = [17, 8, 12, 19, 24, 2];

console.log(isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders));