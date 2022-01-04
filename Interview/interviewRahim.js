// // console.log("A"); // sycncorous
// // setTimeout(() => {
// //   console.log("B"); //Asycronous  way
// // }, 5000);
// // console.log("C"); // sycncorous
// //////////////////////////////////////////////////////////////////
// //                                           closure
// // const y = 5;
// // outerFunction = () => {
// //   var x = 10;
// //   innerFunction = () => {
// //     var sum = x + y;
// //     console.log(sum);
// //   };
// // innerFunction();

// // };
// // outerFunction();
// /////////////////////////////////////////////////////////////
// //               nested array
// // const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// // // console.log(arr);
// // console.log(arr.flat(Infinity)); // output in one function
// // console.log(arr.length); // ans 4 only considering 1st arrray and all other array is combil in one arry this is nmy defination
// /////////////////////////////////////////////////////////////
// // const arr1=[1,2,3,9,5,11,7,]
// // const arr2=[5,6,3,8,2,1]
// // const sum =[...arr1,...arr2]
// // console.log(Math.max(...sum))          // maximun number in two array
// // console.log(Math.max(...arr1))     // maximum number
// // console.log(Math.min(...arr1))     // minimum number
// /////////////////////////////////////////////////////////////
// // spread opprators
// function sum(a, b, ...c) {
//   /// ...c = array me store hota
//   return a + b + c;
// }
// console.log(sum(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////
///////{Hoiesting}
// x = 3;                 1 st initilize then decleared
// console.log(x);
// var x;

//  x()                       //1st we call a function then de cleared it
// function x(){
//   console.log("hello")
// }
// console.log(x)
// var x                       // undefined

// x=5
// var x
// console.log(x)        it only hoiest decleration not the initilization
// x=5

// function X (){

// }
// console.log(5)
// var x=()=>{

// }
// console.log(10);
// const obj1 = { Name: "Md", Age: 22 };
// const obj2 = { ...obj1 };
// const obj3 = obj1;
// obj3.Age = 25;
// console.log(obj1);
// // console.log(obj2);
// console.log(obj3);

// function hO(fn) {
//   fn();
// }
// hO(function () {
//   console.log("Hi Umair");
// });

// function zaki(fun1){
//   fun1()
// }

// function higher() {
//   return function () {
//     return "Do Somthing";
//   };
// }
// var X = higher();
// console.log(X());
///////////////////////////////////////////////////////

// const arr = [num > 10 || num < 1000];
// const arr2 = arr;
// console.log(10);

// console.log(
//   arr.filter((item) => (item % 2 === 0 ? "even Number" : "odd Number"))
// )
