const fencingCommomcost = (sides, numberoflayer, rateofwire) => {
  let parameterOfShape = 0;
  for (let i = 0; i < sides.length; i++) {
    parameterOfShape = parameterOfShape + sides[i];
  }
  const fencingwireLength = parameterOfShape * numberoflayer;
  const costOfWire = fencingwireLength * rateofwire;
  return costOfWire;
};
console.log(fencingCommomcost([10, 13, 5, 6, 7, 12, 8, 5, 7], 4, 12));
