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


module.exports = countOnly;

