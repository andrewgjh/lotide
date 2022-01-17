const flatten = function (array) {
  let flattenArray = [];
  const innerFunction = (array) => {
    for (let element of array) {
      if (Array.isArray(element)) {
        innerFunction(element);
      } else {
        flattenArray.push(element);
      }
    }
  }
  innerFunction(array);
  return flattenArray;
}


  module.exports = flatten;
