const fizzBuzz = (num) => {
    //every time its a multiple of 3 you say fizz
    //every time its a multyipe of 5 you say buzzz
    //every time its a multiple of 3 and 5 you say fizzbuzzno

    for (let i = 1; i <= num; i++) {
        let output = "";

        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }

        if (output === "") {
            output = i;
        }

        console.log(output);
    }
};

fizzBuzz(100);
