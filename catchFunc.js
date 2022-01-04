try {
  const arr = [1, 2, 4, 7, 1, 9, 3, 1, 8];
  const result = foo(arr, 1); //(array,searchby)
  console.log(result);
} catch (e) {
  console.log(e.message);
}
function foo(array, searchby) {
  if (!Array.isArray(array)) throw new Error("Not an Array");
  return array.reduce((a, b) => {
    const occ = b === searchby ? 1 : 0;
    return occ + a;
  }, 0);
}
