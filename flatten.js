const flatten = function(array) {
  let flattenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let element of array[i]) {
        flattenArray.push(element);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]