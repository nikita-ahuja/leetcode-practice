/**
 * @param {number[]} nums
 * @return {number}
 */
 // var pivotIndex = function(nums) {
 //
 //   for (let potentialPivot = 0; potentialPivot < nums.length; potentialPivot++) {
 //
 //     let sumOfLeftHalf = 0;
 //     for (let leftHalfIdx = potentialPivot - 1; leftHalfIdx > -1; leftHalfIdx--) {
 //       sumOfLeftHalf += nums[leftHalfIdx]
 //     }
 //
 //     let sumOfRightHalf = 0;
 //     for (let rightHalfIdx = potentialPivot + 1; rightHalfIdx < nums.length; rightHalfIdx++) {
 //       sumOfRightHalf += nums[rightHalfIdx]
 //     }
 //
 //     if (sumOfRightHalf == sumOfLeftHalf) {
 //       return potentialPivot
 //     }
 //
 //   }
 //   return -1
 // };

function pivotIndex(nums) {

 //establish variables
var leftSum = 0;
var rightSum = nums.reduce((previousValue, currentValue) => previousValue + currentValue);

 for (let idx = 0; idx < nums.length; idx++) {
   rightSum -= nums[idx]
   if (leftSum === rightSum) {
     return idx;
   }
   leftSum += nums[idx]
  }
  return -1
};

console.log(pivotIndex([1,7,3,6,5,6]));
