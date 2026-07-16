// Question 1: Length of the Last Word
function lengthOfLastWord(s) {

    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

// Question 2: Check if Two Strings are Anagrams
function isAnagram(str1, str2) {

    let first = str1.toLowerCase().replace(/\s/g, "");
    let second = str2.toLowerCase().replace(/\s/g, "");

    let sortedFirst = first.split("").sort().join("");
    let sortedSecond = second.split("").sort().join("");

    return sortedFirst === sortedSecond;
}

// Output
console.log("Length of Last Word:");
console.log(lengthOfLastWord("Hello World"));          // 5
console.log(lengthOfLastWord(" fly me to the moon ")); // 4

console.log("\nAnagram Check:");
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false