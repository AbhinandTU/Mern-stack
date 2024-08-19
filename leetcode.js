// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// const nums = [4,1,2,1,2]
// let singleNumber = nums.sort()[0];

// for (let i in nums) {
//     singleNumber = nums[i];

//     for ( let j in nums){

//     }
// }
// console.log(singleNumber);

// var singleNumber = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//    let count = 0;
//    for (let j = 0; j < nums.length; j++) {
//      if (nums[i] == nums[j]) {
//        count++;
//      }
//    }
//    if (count == 1) {
//      return nums[i];
//    }
//    console.log(nums);
//    console.log(singleNumber);
    
//  }};
//  singleNumber();
 

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

singleNumber([4,1,2,1,2]);
 

