const findKeyByValue = function(object, value) {
  let keyArray = Object.keys(object);
  let valueArray = Object.values(object);
  for (i = 0; i < valueArray.length; i++) {
    if (value === valueArray[i]) {
      return keyArray[i];
    }
  }
}

module.exports = findKeyByValue;