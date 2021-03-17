/**
 * split strings into loopable objects, loop around word 1 and check every character to see if it exists in word 2
 * @param {*} word1
 * @param {*} word2
 * @returns
 */
const anagram = function (word1, word2) {
    let result = true;
    word1Arr = word1.toLowerCase().split("");
    word2Arr = word2.toLowerCase().split("");

    //if not the same length just return false
    if (word1Arr.length !== word1Arr.length) {
        return false;
    }

    word1Arr.forEach((item) => {
        if (!word2Arr.includes(item)) {
            result = false;
        }
    });

    return result;
};

//true
console.log(anagram("finder", "Friend"));

//false
console.log(anagram("hello", "bye"));

//true
console.log(anagram("estrngi", "STINGER"));
