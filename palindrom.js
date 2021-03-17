const palindrome = function (str) {
    //convert to lower case
    //split characters out to an array
    //reverse array
    //convert back to string with join method
    //then compare the original string with the 'reversed' string and retun true/false

    str = str.toLowerCase();

    return str === str.split("").reverse().join("");
};

//TRUE
console.log(palindrome("NAVAN"));

//FALSE
console.log(palindrome("Dave"));

//TRUE
console.log(palindrome("annA"));
