// const movies = {
//   title: "jhon wick",
//   showMovie() {
//     return "check this", this.title;
//   },
// };
// console.log("check movies---->", movies.showMovie());

// movies.rathing = function showRating() {
//   return "check Rathing", this;
// };
// console.log("check reating--->", movies.rathing());

///////////////////////(practics)
// const movies = {
//   title: "Red Notic",
//   showMovie() {
//     return "check this", this.title;
//   },
// };
// console.log("check movies===>", movies.showMovie());
// movies.rating = function showRating() {
//   return "check Rating", this;
// };
// console.log("check rating ===>",movies.rating())

/////////////////////////////////////////////////////   regular function
function checkThis(){
    return this       /// refer global
}
console.log(checkThis())

//////////////////////////////////////////////////////// constrocter
// function Some (x){
// this.abc=x; //abc:x
// this.ranks=[1,2,3,4,5]
// this.draw=function(){
//     this.ranks.map(function(items){   ////bind
// return console.log(items ===1?this:0)
//     }.bind(this))
// }
// }
// const output = new Some(10)
// console.log(output.draw())
////////////////////////////////////////////////////////////////
// function Some(x) {
//   this.abc = x; //abc:x
//   this.ranks = [1, 2, 3, 4, 5];
//   this.draw = function () {
//     this.ranks.map((ku) => {
//       return console.log(ku === 1 ? this : 0); ///arrow function reduce bind method
//     });
//   };
// }
// const output = new Some(10);
// console.log(output.draw());
//////////////////////////////////////////////////////////////////
