/**
 * Custom Function that returns a to the power of b
 */
function CustomPow(a, b) {
    //Exponent is 0
    if (parseFloat(b) === 0) {
        return 1;
    }

    let z = a;
    for ($i = 1; $i < b; $i++) {
        z = z * a;
    }

    return z;
}

let testObj = [
    { valOne: 9, valTwo: 1, expected: 9 },
    { valOne: 9, valTwo: 0, expected: 1 },
    { valOne: 2, valTwo: 4, expected: 16 },
    { valOne: 5, valTwo: 3, expected: 125 },
    { valOne: 9, valTwo: 6, expected: 531441 }
];

let html = "Begin...";
for (var key of Object.keys(testObj)) {
    html += `<p> ${testObj[key].valOne} to the power of ${testObj[key].valTwo
        } is <strong>${Math.pow(
            testObj[key].valOne,
            testObj[key].valTwo
        )} </strong> when using Math.pow. <br />My function brings back <strong>${CustomPow(
            testObj[key].valOne,
            testObj[key].valTwo
        )}</strong> </p><h1>${CustomPow(testObj[key].valOne, testObj[key].valTwo) == testObj[key].expected
            ? '<span style="color:green;">Success</span>'
            : '<span style="color:red;">Fail</span>'
        }
  </h1>`;
}

document.getElementById("result").innerHTML = html;
