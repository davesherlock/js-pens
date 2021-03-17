/**
 * Declare vowel array loop around string and increment every time we hit a character that is incuded in vowel array
 * 
 * @param {F} str 
 * @returns 
 */
const findVowels = (str) => {
    let count = 0;
    const vowelsArr = ["a", "e", "i", "o", "u"];

    strArr = str.toLowerCase().split("");

    strArr.forEach((item) => {
        if (vowelsArr.includes(item)) {
            count++;
        }
    });

    return count;
};

//returns 2
console.log(findVowels("hello"));

//returns 0
console.log(findVowels("why"));
