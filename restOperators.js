function cartWithDiscount(discount,...prices){
    const total=prices.reduce((a,b)=>a=b)
    const Discounted=total*discount
    return total =Discounted

}
console.log(cartWithDiscount(0.1,20,30))