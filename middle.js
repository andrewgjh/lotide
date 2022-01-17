
const middle = function(array) {
  let outPutArray = [];
  let midIndex = Math.floor(array.length / 2); 
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      outPutArray.push(array[midIndex - 1]);
      outPutArray.push(array[midIndex]);
    } else {
      outPutArray.push(array[midIndex]);
    }
  }
  return outPutArray;
};



module.exports = middle;