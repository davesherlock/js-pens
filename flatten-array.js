let html = "Begin...";

/**
 * Custom Function to Flaten My Array
 */
function flattenMyArray(arr) {
  const flat = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flat.push(...flattenMyArray(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

/**
 * Helper Function toe compare 2 objects
 */
function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const testObj = [
  { input: [], expected: [] },
  { input: [0, 1, 2, [3, 4]], expected: [0, 1, 2, 3, 4] },
  { input: [1, 2, [3, 4, [5, 6]]], expected: [1, 2, 3, 4, 5, 6] }
];

for (let key of Object.keys(testObj)) {
  html += "<p>";

  html += `<p>Test ${parseInt(key) + parseInt(1)} = <strong>${compareObjects(flattenMyArray(testObj[key].input), testObj[key].expected)
    ? '<span style="color:green;">Success</span>'
    : '<span style="color:red;">Error</span>'
    }</strong>`;

  if (
    !compareObjects(flattenMyArray(testObj[key].input), testObj[key].expected)
  ) {
    html += ` expected = ${JSON.stringify(testObj[key].expected)}`;
    html += ` returned = ${JSON.stringify(flattenMyArray(testObj[key].input))}`;
  }

  html += "</p>";
}

console.log(html);
