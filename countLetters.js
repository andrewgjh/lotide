const countLetters = function(str){
  let noSpacesLowerCase = str.replace(/\s+/g, "").toLowerCase();
  let characterCount = {};
  for (let char of noSpacesLowerCase){
    characterCount[char]= characterCount[char] ? characterCount[char] + 1 : 1;
  }
  return characterCount;
}


module.exports= countLetters;