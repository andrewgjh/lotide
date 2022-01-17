
const without = function (arr, arrWithout) {
  let finalArray = arr;
  for (let removalItem of arrWithout) {
    finalArray = finalArray.filter(word => word !== removalItem)
  }
  return finalArray;
}

module.exports= without;