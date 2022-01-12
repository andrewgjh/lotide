const letterPositions = function(sentence) {
  const results = {};
  let noSpaceLowerCase = sentence.replace(/\s+/g, "").toLowerCase();
  for (let i = 0; i < noSpaceLowerCase.length; i++) {
    if (results[noSpaceLowerCase[i]]) {
      results[noSpaceLowerCase[i]].push(i);
    } else {
      results[noSpaceLowerCase[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));