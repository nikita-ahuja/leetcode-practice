/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        let sumLeft = 0;
        for (let j = i - 1; j > -1; j--) {
            sumLeft += nums[j]
        }

        let sumRight = 0;
        for (let k = i + 1; k < nums.length; k++) {
            sumRight += nums[k]
        }

        if (sumLeft === sumRight) {
            return i
        }
    }

    return - 1
};


var pivotIndex = function(nums) {

  for (let potentialPivot = 0; potentialPivot < nums.length; potentialPivot++) {

    //left side
    let sumOfLeftHalf = 0; //sum the left half of the array, starting at the index and traversing left
    for (let leftHalfIdx = potentialPivot-1; leftHalfIdx >= -1; leftHalfIdx--) {
      sumOfLeftHalf += nums[leftHalfIdx]
    }

    //right side
    let sumOfRightHalf = 0;
    for (let rightHalfIdx = potentialPivot+1; rightHalfIdx <= nums.length; rightHalfIdx++) {
      sumofRightHalf += nums[rightHalfIdx]
    }

    if (sumOfRightHalf == sumOfLeftHalf) {
      return potentialPivot;
    }

  }

  return false

};
