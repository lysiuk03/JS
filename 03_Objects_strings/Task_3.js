let input = "cascading style sheets";

function countSpaces(str) {
    console.log(`Spaces: ${str.split(" ").length-1}`);
}

function upFirstLetter(str) {
    console.log(`Str: ${str.charAt(0).toUpperCase() + str.slice(1)}`) ;
}

function countWords(str) {
    console.log(`Words: ${str.split(" ").filter(word => word !== "").length}`) ;
}

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log(`Is a palindrome.`);
    } else {
        console.log(`Is not a palindrome.`);
    }
}

function Abbreviation(str) {
    let words = str.split(" ");
    let abbreviation = words.map(word => word.charAt(0).toUpperCase()).join("");
    console.log(abbreviation);
}

countSpaces(input);
upFirstLetter(input);
countWords(input);
isPalindrome(input);
Abbreviation(input);