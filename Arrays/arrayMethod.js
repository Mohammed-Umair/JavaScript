// const arr = [10, 20, 30, 40, 50, 60, 70];
//pop&push (last index elemrnt add or detee karega)
// console.log(arr.pop())
// console.log(arr.pop()) //prc
// console.log(arr.push(80,9,90));
// console.log(arr.push(80)) //prc
// console.log(arr)

// (first index elemrnt add or detee karega)
// console.log(arr.shift())
// console.log(arr.shift()) //prc
// console.log(arr.unshift(0,5))
// console.log(arr.unshift(10,5,7,8,6))
// console.log(arr)

// console.log(arr.slice(3,6,))
// console.log(arr.slice(2,5))
// console.log(arr)     //main

//important
// const arr=[1,2,3,4,5,6]
// console.log(arr.splice(2,0,10))
// console.log(arr.slice(5,6))
// console.log(arr.slice(0,4)) //prc

// console.log(arr.splice(3,0,"abc"))
// console.log(arr.splice(3,1,"abc","def"))
// console.log(arr.splice(2,0,{value:1} ,"abc"))

// console.log(arr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const newArr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(newArr.indexOf(40))
// console.log(newArr.indexOf(55))     //-1 (arre ke bhair)
// console.log(newArr.indexOf(40,40))
// console.log(newArr);
// console.log(newArr.includes(50))  // apne array me wo value hai to true dega or nahi hai to false dega
// console.log(newArr.includes(54))
/////////////////////////////////////////////////////////////////////////////////
// const arr3=new Array(15)
// console.log(arr3)
// console.log(arr3.fill(2))
// console.log(arr3.fill(3,1))    //first value and 2nd index
// console.log(arr3.fill("zaki"))
// console.log(arr3.fill("a",6,10))

// const arr3=new Array(20)

// console.log(arr3.fill("a",10,15))
////////////////////////////////////////////////////////////////////////
// const arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
// const mapped= arr5.map((j)=> j+10)
// //const mapped =()=>{}       call back function (eg)
// console.log(mapped)

// const arr4=[1,2,3,4,5,6,7,8,9]
// const mapped= arr4.map((k)=> k-1) ///
// console.log(mapped)

//////////////////////////////////////////////
// const arr6=[1,2,3,4,5,6,7,8,9]
// const filtered=arr6.filter((elem)=>elem%2===0) ///even number filter
// const filtered=arr6.filter((elem)=>elem%2!==0) //odd number filter
// const filtered=arr6.filter((elem)=>elem>5)   //grater filter
// const filtered=arr6.filter((elem)=>elem<5)    //less than filter
// console.log(filtered)
////////////////////////////////////////////////////////////////////////////
// const movies = [
//   { title: "Avengers", year: 2019, rating: 4.5, cat: "action" },
//   { title: "hitman", year: 2015, rating: 3.5, cat: "horor" },
//   { title: "jhon wick", year: 2017, rating: 5, cat: "science" },
//   { title: "thor", year: 2016, rating: 1, cat: "action" },
//   { title: "superman", year: 2020, rating: 5, cat: "horor" },
//   { title: "justic league", year: 2002, rating: 4.4, cat: "science " },
// ];
// const filtered = movies.filter((movi) => movi.rating < 4);
// const filtered = movies.filter((movi) => movi.rating >3);
// const filtered = movies.filter((movi) => movi.year > 2018);
// const filtered = movies.filter((movi) => movi.cat === "horor");
// const filtered = movies.filter((movi) => movi.year < 2020 && movi.rating<3);

// console.log(filtered);
///////////////////////////////////////////////////////////////////////
// reduce method
// const nums = [10, 20, 30, 40, 50];
// const result = nums.reduce((acc, cur) => acc + cur *2);
// console.log(result)
// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, cur) => acc + cur * 2,0)
// console.log(result)
// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, cur) => acc + cur * 2,10)
// console.log(result)
// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, cur) => acc + cur / 2,2)
// console.log(result)
// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, cur) => acc + cur - 2,2)
// console.log(result)
/////////////////////////////////////////////////////////////////////
// for each
// const nums=[1,2,3,4,5,6,7]
// const result=nums.forEach((element) => console.log("foreach==>",element))
// const result=nums.forEach((element) => console.log("5*"+element+"="+element*5)) ///// not give ans in array also method changing not posible
// const result=nums.forEach((ele)=> console.log( "2*" + ele +"="+ele*2 ))
// console.log (result)
///////////////////////////////////////////////////////////////////////////////
///    every    every element is true on condition     to hi chalega
// const nums = [1, 2, 3, 4, 5,6,7];
// const result =nums.every((elem)=> elem >0)
// const result =nums.every((elem)=> elem >8)
// console.log(result)
////////////////////////////////////////////////////////////////
//some
// const nums = [1, 2, 3, 4, 5,6,7];
// const result = nums.some((Element)=> Element >5)
// console.log(result)
/////////////////////////////////////////////////////////////////////////
// join      element ko mlia ke ans dera
// const arr9 = ["j", "o", "h", "n"];
// console.log(arr9.join(""));
// const arr9 = [1,2,3,4,5];
// const arr9 = [1,2,3,"zaki",45];
// console.log(arr9.join(""));
///////////////////////////////////////////////////////////////////////////
// concat    two arary to jion karna hai to (kitnre bhi arrey le sakte)
// const arrr1=[1,2,3,4]
// const arrr2=[5,6,7,8]
// const arrr3=["d","e","f","g"]
// const arrr4=["a","b","c","d"]
// console.log(arrr1.concat(arrr3).concat(arrr2).concat(arrr4))
// console.log(arrr1.concat(arrr2,arrr3,arrr4))
//////////////////////////////////////////////////////////////////////////////
// reverse method
// const arrr1=[1,2,3,4]
// console.log(arrr1.reverse())
////////////////////////////////////////////////////////////////
//    sortting
// const z1 = [1,2,5,3,9];
// console.log(z1.sort((a, b) => a - b));    //assending order
// console.log(z1.sort((a, b) => b-a)); // desinding order
// const z1 = ["jhon", "simon", "piter", "rony"];
// console.log(z1.sort((a,b)=> a>b ? 1: -1));
// const z1 = ["jhon", "Zebra", "simon", "Piter", "rony"];
// console.log(z1.sort((a,b)=> a<b ? 1: -1));  // desinding order
// console.log(z1.sort((a,b)=> a<b ? -1: 1));  // assending order
// console.log(z1.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1)));
// console.log(z1.sort((a, b) => (a.toUpperCase() < b.toUpperCase() ? -1 : 1)));
/////////////////////////////////////////////////////////////////
// method changing
// const zaki = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = zaki.filter((zk) => zk % 2 === 0).map((um)=>um +40).reduce((a,b)=> a+b)
// console.log(result);
const number = [1, 2, 3, -1, -2];
console.log(number.filter((item) => item >= 0));
