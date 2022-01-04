const costOfTravelOptm = (d, mi, cost) => Math.ceil(d / mi) * cost;

console.log("Hyd Travel Cost:",costOfTravelOptm(300, 13, 112));
console.log("pune Travel Cost:",costOfTravelOptm(550, 15, 112));
console.log("Aurangabad Travel Cost:",costOfTravelOptm(260, 14, 112));
