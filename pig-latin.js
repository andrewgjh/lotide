const args = process.argv.slice(2);

const createPigLatin = function(str) {
  let pigLatinWord = str.slice(1, str.length) + str.slice(0, 1) + "ay";
  return pigLatinWord;
};

const pigLatin = function(array) {
  let pigLatinString = "";
  for (let word of array) {
    pigLatinString += createPigLatin(word) + " ";
  }
  return pigLatinString;
};

console.log(pigLatin(args));