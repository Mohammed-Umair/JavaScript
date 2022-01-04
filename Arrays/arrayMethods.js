//          1) pop method =in which last element is pull out 
// const arr1=[10,20,30,40,50,60,70,80]
// console.log(arr1.pop())
// console.log(arr1)

/////////////////////////////////////////////////////////////
//          2) puch method = in which last me ek element add kar sakte
// const arr2=[10,20,30,40,50,60,70,80]
// console.log(arr2.push(90))
// console.log(arr2)
///////////////////////////////////////////////////////////////////
//         3) shift method= agar array shift use kare to first element pull out hoga
// const arr3=[10,20,30,40,50,60,70,80]
// console.log(arr3.shift(40))
// console.log(arr3)
//////////////////////////////////////////////////////////////////////=
//          4) unshift method= agar array unshift use kare to element start me add hoga both('string'& number)
// const arr4=[10,20,30,40,50,60,70,80]
// // console.log(arr4.unshift("zaki"))   
// console.log(arr4.unshift(25))   
// console.log(arr4)
/////////////////////////////////////////////////////////////////////
//          5) slice method = first value lega our 2nd value ke 1phale ki value lega
// const arr5=[10,20,30,40,50,60,70,80]
// console.log(arr5.slice(2,5)) 
// console.log(arr5)
////////////////////////////////////////////////////////////////////
//           6) splice method = 
// const arr6=[10,20,30,40,50,60,70,80]
// console.log(arr6.splice(2,2))
// console.log(arr6.splice(2,2,"zaki","sam"))
// console.log(arr6.splice(3,0,{value:1}))
// console.log(arr6)
////////////////////////////////////////////////////////////////////
//          7) index of= isme element ka index no show hoga agar element arry me exist nahi hai to -1 ans show hoga
// const arr7=[10,20,30,40,50,60,70,80]
// console.log(arr7.indexOf(50))
// console.log(arr7.indexOf(90))
// console.log(arr7)
//////////////////////////////////////////////////////////////////
//         8) includes = agar element arry me hai to true aayega /nahi to false aayege
// const arr7=[10,20,30,40,50,60,70,80]
// console.log(arr7.includes(50))
// console.log(arr7.includes(90))
// console.log(arr7)
//////////////////////////////////////////////////////////////////////
//         9) fill = blank array me value fill hoti
const arr7= new Array(15)
// console.log(arr7.fill(5))
// console.log(arr7.fill(5,10))
console.log(arr7.fill("zaki",5,2))
// console.log(arr7)