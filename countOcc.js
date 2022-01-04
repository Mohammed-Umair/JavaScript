// const arr = ["a", "b", "c", "b", "c", "d", "a", "a"];
// console.log(countOcc(arr));
// countOcc(arr);
// function countOcc(myArr) {
//   return myArr.reduce((acc, curr) => {
//     return acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1), acc; //// in this dot notation dosent work
//   }, {});
// }

// const zaki = ["x", "y", "z", "y", "x", "x"];
// console.log(count1(zaki));
// count1(zaki);
// function count1(myZaki) {
//   return myZaki.reduce((acc, curr) => {
//     return acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1), acc;
//   }, {});
// }
const family = [
  "Umair",
  "Zaki",
  "Sameer",
  "Juneed",
  "Zaki",
  "Umair",
  "Juneed",
  "Umair",
];

console.log(outPut(family));
outPut(family);
function outPut(myFamily) {
  return myFamily.reduce((acc, curr) => {
    return acc[curr] ? (acc[curr] += 1) : acc[curr]=1, acc;
  }, {});
}
