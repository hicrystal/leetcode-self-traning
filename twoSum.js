/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        //new arr
        let result = target - nums[i];
        if (nums.indexOf(result) !== -1 && nums.indexOf(result) !== i  ) {
            arr.push(i, nums.indexOf(result));
            return arr;
        }
    }


};