const args = process.argv.slice(2);
const reverse = function(array) {
  let reversedString = "";
  for (let item of array) {
    let splitItem = item.split("");
    for (let i = splitItem.length - 1; i >= 0; i--) {
      reversedString += splitItem[i];
    }
    reversedString += " ";
  }
  return reversedString;
}

module.exports= reverse;