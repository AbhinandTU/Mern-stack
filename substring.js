// 1. Given a string's . find the length of the longest substring without repeating characters. 
// input = abcabcbb
// output = 3
(function(){
  // const array = [ "a", "b", "c", "a", "b", "c", "b", "b"];

  // for(let i = 0; i <= array.length; i++){
  //   for(let j = 1; j <= array.length; j++){
      
  //     let x = 0 ;
  //     let y = 0 ;
  //     let substring;
  //     if (array[i]=== array[i+j]){
  //       // console.log(j);
  //       y = y++;
  //       // console.log(`this is y ${y}`);
        
  //       substring = array.slice(0, indexof(j));
  //       console.log(`this is s ${substring}`);
  //     }
  //     else{
  //       substring = array.slice(0, j);
  //       console.log(`this is s ${substring}`);
  //       console.log(`this is i ${i}`);
  //       x = x++;
  //       // console.log(`this is y ${x}`);
  //     }
  //     substring = array.slice(0, j);
  //     console.log(`this is s ${substring}`);
  //   }
  // }

  const array = "abcabcbb"
  let string = [];
  let substring = "";
  for (let index in array ){
    
    if(substring.includes(index)){
      l += index;
      }
    else{
      string.push(substring);
    }}
})(click, );
  
