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

// const reverseWord = function (string) {
//   let splitUp = string.split("");
//   let placeHolder = "";
//   let finalWord = "";
//   for (let i = 0; i < string.length / 2; i++) {
//     placeHolder = splitUp[i];
//     splitUp[i] = splitUp[string.length - i - 1];
//     splitUp[string.length - i - 1] = placeHolder;
//   }
//   for (let char of splitUp) {
//     finalWord += char;
//   }
//   return finalWord;
// };

// const reverse = function (array) {
//   let reversed = "";
//   for (let word of array) {
//     reversed += reverseWord(word) + " ";
//   }
//   return reversed;
// };

console.log(reverse(args));