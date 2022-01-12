const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through//
// itemsToCount: an object specifying what to count//
const countOnly = function(allItems, itemsToCount) {
  //an array holding only what needs to be counted//
  let toCount = [];
  let finalObj = {};
  //looking at the object to push only key thats hold true into toCount array//
  for (let countable in itemsToCount) {
    if (itemsToCount[countable] === true) {
      toCount.push(countable);
    }
  }
  //looping over toCount array//
  for (let key of toCount) {
    //looping over allItems array to find match//
    for (let element of allItems) {
      if (key === element) {
        //when match is found either create a key value pair and add one or just increment if already exists//
        finalObj[key] = finalObj[key] ? finalObj[key] + 1 : 1;
      }
    }
  }
  return finalObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);