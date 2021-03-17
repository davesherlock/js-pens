let html = "Begin...";

function reverseString(str) {
    return str.split("").reverse().join("");
}

const testObj = [
    { input: "hello", output: "olleh" },
    { input: "Navan", output: "navaN" }
];

let count = 1;
testObj.forEach((item) => {
    html += `<p>Test One = ${count} `;
    if (reverseString(item.input) === item.output) {
        html += "Success";
    } else {
        html += "Error ";
        html += `${reverseString(item.input)} is not equal to ${item.output}`;
    }
    html += "</p>";

    count++;
});

document.getElementById("app").innerHTML = html;
