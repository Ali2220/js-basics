let originalString = "Real Madrid is best";
let reversedString = '';

for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}

console.log(reversedString); 
