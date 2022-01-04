// const c ="hello"
// const c="world"   // console.log(c) ans c is already been decleared
// console.log(c)
// var c ="hello"
// var c="world"   // console.log(c) ans {world}
// console.log(c)
// let c ="hello"
// let c="world"   // console.log(c) ans c is already been decleared
// console.log(c)
//////////////////////////////////////////////////////////////////////////////////
// const a=1<2<3
// console.log(a)   //  1<2=true then true<3=true  ;true has value =1
// const b=1>2>3
// console.log(b)      // ans false           // false has value=0
//////////////////////////////////////////////////////////////////////////////
// const str = "zaki"; // ans shouldbe "ikaz"
// console.log(str.split("").reverse().join(""))
// const str3 = "INDIA IS MY COUNTRY"; // ans shouldbe {country my is india}
// console.log(str3.split("").reverse().join(""))   //ans:{YRTNUOC YM SI AIDNI}
// console.log(str3.split(" ").reverse().join(" ")); // ans:{COUNTRY MY IS INDIA}
////////////////////////////////////////////////////////
// const str1 = 987345;      // ans shouldbe 543789
// console.log(str1.toString().split("").reverse().join(""))
/////////////////////////////////////////////////////////////
//  {palendrome}
// const str2 = "MADAM";   //  ans {     true     }
// console.log(str2.split("").reverse().join("") === str2);
/// importtaant       palendrom number
// const arr = 12321;
// const a = String(arr);
// let b = a.split("");
// let rev=[];

// for (let i = 0; i <b.length; i++) {
//   rev[i] = b[b.length-1-i];
// }

// opp=rev.join("")
// let result=a===opp?'palindrome':'not a palindrome'
// console.log(result)

// console.log(arr.toString()!==arr)
// const a=arr.toString().length
// for (let i=0; i<a/2;i++){
//     if (a)
// }
//////////////////////////////////////////////////////////////
// const str3 = "INDIA IS MY COUNTRY";
// console.log("str3")
/////////////////////////////////////////////////////////////
/////////////        {Find duplicate words}/////////////////
// // const str = "myworldmumbai";   //  ans===>{ m: 3, y: 1, w: 1, o: 1, r: 1, l: 1, d: 1, u: 1, b: 1, a: 1, i: 1 }
// const str = "mynameiskhan";       //ans===>{ m: 2, y: 1, n: 2, a: 2, e: 1, i: 1, s: 1, k: 1, h: 1 }
// const arr = str.split("");
// const obj = {};
// arr.forEach((elem) => {
//   obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
// });
// console.log(obj);

////////////////////////////////////////////////////////////////////
/////////           [MaxNumber]
// const arr = [1, 4, 2, 7, 3, 8, 5, 9];     ///  { max=9}  (1) if else method
// let max = 0;
// arr.forEach((element) => {
//   max = max < element ? element : max;
// });
// console.log(max)
// const arr = [1, 4, 2, 7, 3, 8, 5, 9]; ///  { max=9} (2)  using math libarery
// let max = 0;
// arr.forEach((element) => {
//   max = Math.max(max, element);
// });
// console.log(max);
// const arr = [1, 4, 2, 7, 3, 8, 5, 9]; ///  { max=9} (3)  using reduce meyhod
// const max = arr.reduce((acc, cur) => Math.max(acc, cur));
// console.log(max);
//////////////////////////////////////////////////////////////////////////

// const arr=[1,12,2,2,3,3,44]

//  const duplicate=arr.filter((elem,index)=>{
//   return arr.indexof(elem)===index
// })
// console.log(duplicate.reduce((acc,curr)=>acc+curr));

// function sumAll(...args) {
//   // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// console.log(sumAll(1)); // 1
// console.log(sumAll(1, 2)); // 3
// console.log(sumAll(1, 2, 3)); // 6

a = [1, 2, 3];
console.log(...a);

let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(clonedObj1)



