const map = function (array, callback){
  let outputArray = [];
  for (let element of array){
    outputArray.push(callback(element));
  }
  return outputArray;
}




const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
console.log(results1);
