const obj = {
  a: {
      a1: 1,
      a2: 2,
      a3: 3
  },
  b: {
      b1: 3,
      b2: 4,
      b3: 5,
      z:{
          z1: 0,
          z2: -1
      }
  },
  c: 5,
  d: 6
}

// {a1:1,a2:2,a3:3,b1:3,b2:4,b3:5,z1:0,z2:-1,c:5,d:6}

// function flattenNum (obj){
//   let innerObj = {};
//   let child = {};
//   for (let parent in obj){
//     innerObj = obj[parent];
//     console.log(innerObj);
    
//     for ( let child in parent[p])
//   }
// }

// flattenNum();

let result = {}

function flatten (obj){

  let primaryKeyobj ={}

  for(let pk in obj){
    primaryKeyobj = obj[pk]
    if ( typeof(primaryKeyobj)== "object" ){
      // for(let sk in primaryKeyobj){
      //   result[sk] = primaryKeyobj[sk]
     
      // }
      flatten(primaryKeyobj)

    }else{
      result[pk]= obj[pk]
    }
  
    
  }
  return result
}


console.log(flatten(obj));
