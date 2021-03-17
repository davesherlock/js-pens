const fizzBuzz = (num) => {

    //every time its a multiple of 3 you say fizz 
    //every time its a multyipe of 5 you say buzzz
    //every time its a multiple of 3 and 5 you say fizzbuzzno

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz(100);
