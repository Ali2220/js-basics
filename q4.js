const a = "Maham";
const b = a.toLowerCase().replace(/[^a-z0-9]/g, '');

const isPalindrome = b === b.split('').reverse().join('');

if (isPalindrome) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
