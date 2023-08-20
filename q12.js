const arr1 = [2,4,6,8,10];
const arr2 = [];

for (let element of arr1) {
    arr2.push(element * 2);
}

console.log("Original array:", arr1);
console.log("Doubled array:", arr2);
