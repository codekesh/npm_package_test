// this is calculator for 2 variables
function calculator(a, b, c) {
  if (c === "+") {
    return `Result will be ${a + b}`;
  } else if (c === "-") {
    return `Result will be ${a - b}`;
  } else if (c === "*") {
    return `Result will be ${a * b}`;
  } else if (c === "/") {
    return `Result will be ${a / b}`;
  } else if (c === ">") {
    return a > b ? "a is greater than b" : "a is not greater than b";
  } else if (c === "<") {
    return a < b ? "a is lesser than b" : "a is not lesser than b";
  } else if (c === "=") {
    return a === b ? "a is equal to b" : "a is not equal to b";
  } else {
    return "Invalid operation";
  }
}
module.exports = calculator;
