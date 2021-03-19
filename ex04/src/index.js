// Only change code below this line
function sumFibbonaci(num) {
  var fib0 = 0;
  var fib1 = 1;
  var fib = 1;
  var sum = fib0;
  while (fib <= num) {
    if (fib % 2) {
      sum += fib1;
    }
    fib = fib0 + fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  return sum;
}
// Only change code above this line
console.log(sumFibbonaci(1)); // Change this line
console.log(sumFibbonaci(10)); // Change this line
console.log(sumFibbonaci(20)); // Change this line
console.log(sumFibbonaci(4)); // Change this line
console.log(sumFibbonaci(-5)); // Change this line
module.exports = sumFibbonaci;
