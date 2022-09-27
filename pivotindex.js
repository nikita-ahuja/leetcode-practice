/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        console.log("ITERATION NUMBER", i);
        console.log("i is ", i);
        let sumLeft = 0;
        console.log("sumLeft = ",sumLeft)
        for (let j = i - 1; j > -1; j--) {
            console.log("j is ", j);
            sumLeft += nums[j]
            console.log("sumLeft = ",sumLeft)
        }

        let sumRight = 0;
        for (let k = i + 1; k < nums.length; k++) {
            console.log("k is", k)
            sumRight += nums[k]
            console.log("sumRight = ", sumRight)
        }

        if (sumLeft === sumRight) {
            return i
        }
    }

    return - 1
};
