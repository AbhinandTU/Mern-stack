// you are given a dictionary ' word_count' where the keys are words and the values are the number of times those words appear in a text

var dictionary = function(){

  const wordCount = {"apple":4, "banana":5, "cherry":5}

  // for ( let key in wordCount){

  // }

//   let txt = "";
//   for (let x in wordCount) {
//   txt += wordCount[x];

//   let num = parseFloat(txt);
//   console.log(num.max);
// }

  // let array;

// your task if to find the word with the highest frequency and return it 

  // not sure does it make a new array or not check that [yep it does make a new array]
  const wordCountE = Object.entries(wordCount);

  wordCountE.sort((a, b) => b[1] - a[1]); 
  let highestFrequency = wordCountE[0];

  let Word = highestFrequency[0];
  let Count = highestFrequency[1];
  // console.log("Highest frequency word:", Word);
  // console.log("Highest frequency count:", Count);
for ( let index = 0; index < wordCount.length; index++){
  if ( wordCount[index] === 1){
    console.log("hii");
  }
}
  

  // wordCount.sort((key, wordCount) => key- wordCount);
  // console.log(wordCount.sort((wordCount, key) => wordCount- key));
  
  // console.log(wordCount.key[0])
 
// for (let index = 0; index < wordCount.length; index++){
//   let x = 1
//   console.log(wordCount.x);
// }
// };

// for ( var keys in wordCount){
//   array.push(wordCount[keys])
// }

  // console.log(array)
}
dictionary();


