var flattenArray = function (arr) {
  const flat = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      //recursive call here
      flat.push(...flattenArray(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
};

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const testObj = [
  //pass
  { input: [1, 2, 3, 4, [5, 6]], expected: [1, 2, 3, 4, 5, 6] },

  //fail
  { input: [1, 2, 3, 4, [5, 6]], expected: [1, 2, 3, 4, 5, 6, 7] }
];

testObj.forEach((item) => {
  let returned = flattenArray(item.input);

  if (isEqual(returned, item.expected)) {
    console.log("Success");
  } else {
    console.log(
      `returned ${returned} is not equal to expected ${item.expected}`
    );
  }
});
