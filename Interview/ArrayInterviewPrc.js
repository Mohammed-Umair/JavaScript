// const arr1=["Cat","Bat"]        // with templete litllars
// const arr2= new Array("cat","bat")   without  templete litllars
// console.log(arr2)

// const arr1=["Cat","Dog"]
// // console.log(arr1.push("Monkey"))
// console.log(arr1.unshift(2),arr1.push(5))
// console.log(arr1)
///////////////////////////////////////////////////////
// const x = "Umair Mohammed"; // ans riamu      //// reverse
// console.log(x.split("").reverse().join(""));
///////////////////////////////////////////
// const A=["a","b","c","d"]
///////////////////////////////////////////
// const even = [11, 20, 31, 40, 5, 6, 7, 8, 9, 10];
// console.log(even.map((item)=>{

//         if(item%2){
//             return even
//         }

// }))
// const zaki = even.filter((item) => item % 2 !== 0);
// console.log(zaki);
// console.log(even)
// ////////////////////////////////////////
// const S=[1,2,3,6,5,2,8,7,6,3]
// const t=[...new Set(S)]
// console.log(t)

// const sk = even.filter((e) => e % 2==0 );
// console.log(sk);

// const x=5
// console.log(x--)
// console.log(++x)
// console.log(x)
// arr = [1, 2, 3, 4, 5, 6];
// var arr = (number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//       return "hello World";
//     }
//   if (number % 3 === 0) {
//     return "hello";
//   }
//   if (number % 5 === 0) {
//     return "world";
//   }
// };

// console.log(arr(15));

// var arr = [
//   1,
//   5,
//   46,
//   3,
//   "a",
//   true,
//   "ghg",
//   { name: "zaki" },
//   { age: 33 },
//   { name: "jdh" },
//   "a",
//   46,
//   5,
//   false,
// ];

// const obj = {};
// arr.forEach((elem) => {
//   obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
// });

// console.log(obj);

// function num() {
//   var number = 23; // name is a local variable created by init
//   function num2() {
//     // displayName() is the inner function, a closure
//     console.log(number); // use variable declared in the parent function
//   }
//   num2();
// }
// num();

let outerFunction = () => {
  var name = "zaki";
  let innerFunction = () => {
    console.log(name);
    console.log();
  };
  innerFunction(10);
};
outerFunction();

//////////////////////////////////////////////////////

// pass by value
// let x=10
// let y=x

// x=30
// console.log(x);
// console.log(y);
/////////////////////////////////////////////////////
//pass by refernece

// let x = { name: "zaki", age: 22 };
// let y = x;
// x.age = 30;
// x.name="umair"
// console.log(x);
// console.log(y);
// x=3
// y="5"
// console.log(x-y);

// a = 10;
// sum = a + b;
// b = 20;
// console.log(sum);
// var sum;

// var sum = 5 + "5" + 5;
// console.log(sum);
// var sum = "5" + 5 + 5;
// console.log(sum);
// var sum = "5" + 5;
// console.log(typeof sum);
// console.log(sum);
// var sum = "5" - 5;
// console.log(typeof sum);
// console.log(sum);
// var sum = 5- "Zaki" ;
// console.log(typeof sum);
// console.log(sum);
// var sum = "abc"- "Zaki" ;
// console.log(typeof sum);
// console.log(sum);
// var sum = "abc" - true;
// console.log(typeof sum);
// console.log(sum);
// var a=6
// var sum = a=-2; //a=a+1
// console.log(typeof sum);
// console.log(sum);

// var a = 10;
// var b = 20;
// a=20 b=10
// console.log(`a=${a}`);
// a=b
// console.log(a);
// console.log(b/2);
// a = b;
// b = a - 10;
// console.log(a);
// console.log(b);
// var aa = `${a=b}, ${b/2}`;

// console.log(aa);

// x = 10;
// y = x;

// x= 20;

// console.log(x);
// console.log(y);

// x = { value: 10 };
// y = x;
// x.value = 20;
// console.log(x);
// console.log(y);

// const arr = { name: "shaikh", age: 5,add:"nandee" };
// const a = Object.entries(arr);
// console.log(a);

var x = () => {
  console.log(2);
};
x((name)=>name==="number"?"yess":"nooo")
