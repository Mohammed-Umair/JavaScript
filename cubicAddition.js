const cubicAddition = (nums,power) => {
  let cubicsum = 0;
  nums.forEach((element) => {
    cubicsum = cubicsum + element ** power;   // uesr +=(+,-,*,/)
  });
  return cubicsum;
};
console.log(cubicAddition([2, 5, 7, ],3));


const cubicSubtraction =(nums,power)=>{
    let powerSub =0
}