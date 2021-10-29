function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } else {
    return num2 + " is greater than " + num1;
  }

  }

console.log(greaterNum(1, 10));
console.log(greaterNum(-1, 0));
console.log(greaterNum(5, 99));
