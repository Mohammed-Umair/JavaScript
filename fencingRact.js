//fencing of a rectangle
// const fencingRectCost =(l,b,numberOfLayer,rateOfWire) =>{
//     const parameterOfShape= l+b+l+b
//     const fencingwireLength = parameterOfShape*numberOfLayer
//     const costOfWire=fencingwireLength*rateOfWire
//     return costOfWire

// }
// console.log(fencingRectCost(5,4,4,10))

//fencing of a square
// const fencingSquareCost=(a,numberOfLayer,rateOfWire)=>{
//     const parameterOfShape= a+a+a+a
//     const fencingwireLength = parameterOfShape*numberOfLayer
//     const costOfWire=fencingwireLength*rateOfWire
//     return costOfWire
// }
// console.log(fencingSquareCost(10,5,10))

// fencing of tarngle
// const fencingtranglecost=(a,b,c,numberoflayer,rateofwire)=>{
// const parameterOfShape=a+b+c
// const fencingwireLength=parameterOfShape*numberoflayer
// const costOfWire=fencingwireLength*rateofwire
// return costOfWire

// }
// console.log(fencingtranglecost(6,5,4,2,12))


// fencing of circle
const fencingcirclecost=(r,numberoflayer,rateofwire)=>{
    const pi=22/7
    const parameterOfShape=2*pi*r
    const fencingwireLength=parameterOfShape*numberoflayer
    const costofwire=fencingwireLength*rateofwire                                                               `                                                                                                                                                                                                                                               `
    return costofwire
}
console.log(fencingcirclecost(7,5,10))