// // const greeting =(time)=> time!==number? 
// function greeting(time){
//     if(typeof time!=="number"){
//         return "invalid output"
//     } else if(time>=6 && time<12){
//         return "Good Morning"
//     } else if (time>12 && time<16){
//         return "Good Noon"
//     } else if (time>16 && time<19){
//         return "Good Evining"
//     } else{
//         return "Good Night"
//     }
// }

// console.log(greeting(9))
// const greeting =(time)=> time!==Number
function greeting(time){
    if(typeof time!=="number"){
      return "invalid output"
    } else if (time>=6 && time<12){
        return"GoodMorning"
    } else if (time>12 && time<16){
        return "Good Noon"
    }else if (time>16 && time<19){
        return "Good Evining"
    }else {
        return "Good Night"
    }
}
console.log(greeting(9))