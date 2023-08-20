let num = [10, 20, 30, -40, -50, -60, 40, 50];

let sum = 0;
for (let number of num) {
    if (number > 0) {
        sum += number;
    }
}

console.log("Sum of positive numbers:", sum);
