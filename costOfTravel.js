const costOfTravel = (d, mi, cost) => {
  const fuelRequired = d / mi;
  const totalCost = fuelRequired * cost;
  return Math.ceil(totalCost);
};
console.log(costOfTravel(300, 13, 112));
