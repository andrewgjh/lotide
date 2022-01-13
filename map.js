// const map = function (array, callback){
//   let outputArray = [];
//   for (let element of array){
//     outputArray.push(callback(element));
//   }
//   return outputArray
// }


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
console.log(results1);
