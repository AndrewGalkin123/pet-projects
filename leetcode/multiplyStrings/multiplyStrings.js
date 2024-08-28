var multiply = function (num1, num2) {
  var result = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    if (i !== num1.length - 1) {
      result += num1[i] * num2 * Math.pow(10, num1.length - 1 - i);
    } else {
      result += num1[i] * num2;
    }
  }
  return result;
};

let num1 = "233";
let num2 = "456";

console.log(multiply(num1, num2));
