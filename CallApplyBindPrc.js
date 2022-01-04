// const data = {
//   firstname: "Kasar",
//   getfullname: function () {
//     return this.firstname;
//   },
// };
// const data2 = {
//   firstname: "Mohammed",
// };
// function getfullname2(lastname, city, age) {
//   return this.firstname + " " + lastname + " " + city + " " + age;
// }
// console.log(getfullname2.call(data2, "Umair", "Nanded", "21"));
// console.log(getfullname2.apply(data2, ["Sameer", "Pune", "18"]));
// console.log(getfullname2.bind(data2)("Rizwan", "Mumbai", "35"));


function MatchingCharacters(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var charObj = {};
    var lastIdx = str.lastIndexOf(str[i]);
    if (i == lastIdx) continue;
    for (var j = i + 1; j < lastIdx; j++) {
      if (charObj[str[j]] == undefined) charObj[str[j]] = str[j];
    }
    if (count < Object.keys(charObj).length)
      count = Object.keys(charObj).length;
  }
  return count;
}
console.log(MatchingCharacters("gadcsscdagda"));
