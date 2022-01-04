const arr = [1, 2, 3, 4, 5]; ////// arrry clone
const arrCopy = [...arr];

const obj = { name: "zaki", value: "infinite" };
const objCopy = { ...obj };




// /////////////GarbageCollection///////////////
const circle={}          ///// deallocated the memory of any unsued variable or constants
///////                      it all happen in backbround
/////////////////////////  yyou have no control over when the garbage collection collection.
console.log(circle)