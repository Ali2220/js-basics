let String = "Ali sarwar is a good boy";
let vowel = 0;
for (let i = 0; i < String.length; i++) {
    const char = String[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        vowel++;
    }
}

console.log(`Vowels in a string are: ${vowel}`);
