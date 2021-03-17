const palindrome = function (str) {
    //turn the string to lower case
    str = str.toLowerCase();

    //reverse the string and return the result of the comparison
    return str === str.split("").reverse().join("");
};

//TRUE
console.log(palindrome("NAVAN"));

//FALSE
console.log(palindrome("Dave"));

//TRUE
console.log(palindrome("annA"));
