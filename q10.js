
const num1 = 5;
let fact = 1;
let num2 = 1;

do {
    fact = fact * num2;
    num2++;
} while (num2 <= num1);

console.log(`Factorial of ${num1} is: ${fact}`);
