function intrest(principal, rate = 15, years = 8) {
  return ((principal * rate) / 100) * years;
}
console.log(intrest(10000)); 