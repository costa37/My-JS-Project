// myCalc();
myEdvancedCalc();
//calculator
function myCalc() {
  let num1 = prompt("Enter num1");
  let operator1 = prompt("Enter the operator (+ - / *) ");
  let num2 = prompt("Enter num2");
  console.log("The math problem is as follows: " + num1 + operator1 + num2);
  switch (operator1) {
    case "+":
      console.log('Result: ' + num1 + num2);
      break;
    case "-":
      console.log('Result: ' + num1 - num2);
      break;
    case "/":
      console.log('Result: ' + num1 / num2);
      break;
    case "*":
      console.log('Result: ' + num1 * num2);
      break;
    default:
      console.log("Error: Wrong operator!" + '\n' + "Expected: + - / *", '\n', "Actual:", operator1);
  }
}
function myEdvancedCalc() {

  let userAnswer = prompt('Enter simple math problem that will have 2 numbers and one simple (+ - / *) operator with spaces').split(' ');

  breakme:
  {
    if ((userAnswer[0] >= 0) && (userAnswer[2] >= 0)) {
      console.log('1st and 2nd numbers are correct');
    }
    else {
      console.log('1st or 2nd number are incorrect, expected number >= 0', '\n' + 'First number actual:', userAnswer[0], '\n' + 'Second number actual:', userAnswer[2], '\n' + 'Further calculations are impossible');
      break breakme;
    }
    let result
    switch (userAnswer[1]) {
      case "+":
        result = parseInt(userAnswer[0]) + parseInt(userAnswer[2]);
        console.log('Result:', result);
        break;
      case "-":
        result = parseInt(userAnswer[0]) - parseInt(userAnswer[2]);
        console.log('Result:', result);
        break;
      case "/":
        result = parseInt(userAnswer[0]) / parseInt(userAnswer[2]);
        console.log('Result:', result);
        break;
      case "*":
        result = parseInt(userAnswer[0]) * parseInt(userAnswer[2]);
        console.log('Result:', result);
        break;
      default:
        console.log("Error: Wrong operator!" + '\n', "Expected: + - / *", '\n', "Actual:", userAnswer[1], '\n' + 'Further calculations are impossible');
    }
  }
}
