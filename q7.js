const array = [2,1,2,3,4,5,4,5];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            array.splice(j, 1);
            j--;
        }
    }
}

console.log("duplicate numbers are removed", array);
