/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {

   for (let potentialPivot = 0; potentialPivot < nums.length; potentialPivot++) {

     let sumOfLeftHalf = 0;
     for (let leftHalfIdx = potentialPivot - 1; leftHalfIdx > -1; leftHalfIdx--) {
       sumOfLeftHalf += nums[leftHalfIdx]
     }

     let sumOfRightHalf = 0;
     for (let rightHalfIdx = potentialPivot + 1; rightHalfIdx < nums.length; rightHalfIdx++) {
       sumOfRightHalf += nums[rightHalfIdx]
     }

     if (sumOfRightHalf == sumOfLeftHalf) {
       return potentialPivot
     }

   }
   return -1
 };
