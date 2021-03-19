// Only change code below this line
function rangeOfNumbers(startN, endN) {
  if (startN > endN) {
    return "The starting number will always be less then or equal to the ending number";
  } else {
    if (startN === endN) {
      return [endN];
    } else {
      var array = rangeOfNumbers(startN + 1, endN);
      array.unshift(startN);
      return array;
    }
  }
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); // Change this line
console.log(rangeOfNumbers(5, 5)); // Change this line
console.log(rangeOfNumbers(7, 5)); // Change this line
module.exports = rangeOfNumbers;
