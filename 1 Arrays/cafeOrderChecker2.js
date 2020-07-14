function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  let takeOutOrderIndex = 0;
  let dineInOrderIndex = 0;
  let servedOrderIndex = 0;

  const maxTakeOutOrderIndex = takeOutOrders.length;
  const maxDineInOrderIndex = dineInOrders.length;

  for (let i = 0 ; i < servedOrders.length; i++) {

    if (
      (takeOutOrderIndex !== maxTakeOutOrderIndex)
      && (servedOrders[i] === takeOutOrders[takeOutOrderIndex]))
      {
        takeOutOrderIndex++;
      }

    else if (
      (dineInOrderIndex !== maxDineInOrderIndex) 
      && (servedOrders[i] === dineInOrders[dineInOrderIndex]))
      {
        dineInOrderIndex++;
      }

    else return false;

  }

  if (
    (takeOutOrderIndex !== maxTakeOutIndex)
    || (dineInOrderIndex !== maxDineInOrderIndex))
    {
      return false;
    }

  return true

} 