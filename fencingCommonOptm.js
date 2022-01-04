const fencingCommomOptmcost = (sides, numberoflayer, rateofwire) => {
  let parameterOfShape = 0;
  sides.forEach((element) => {
    parameterOfShape = parameterOfShape + element;
  });
  // for (let i = 0; i < sides.length; i++) {
  //   parameterOfShape = parameterOfShape + sides[i];
  // }
  const fencingwireLength = parameterOfShape * numberoflayer;
  const costOfWire = fencingwireLength * rateofwire;
  return costOfWire;
};
// console.log(fencingCommomOptmcost([10, 13, 5, 6, 7, 12, 8, 5, 7], 4, 12));
console.log(fencingCommomOptmcost([22,6,7], 4, 12));        // two side and half circe 
