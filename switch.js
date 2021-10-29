function greaterNum(num1, num2) {
    if (num1 > num2) {
      return num1 + " ist größer als " + num2;
    } else {
      return num2 + " ist größer als " + num1;
    }
  }
  console.log(greaterNum(1, 10));
  console.log(greaterNum(-1, 0));
  console.log(greaterNum(5, 1));
  console.log(greaterNum(5, 5));
  