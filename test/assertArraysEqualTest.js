const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([2,4,6,8,10],[2,4,6,8,10]); //true
assertArraysEqual([1,2,3,4,5,6],['1','2','3','4','5','6']); //false