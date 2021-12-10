/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums.length <= 1) {
        return nums.length
    }

    function getNums(nums, index) {
        if (index >= nums.length) {
            return nums.length
        }
        if (nums[index] == nums[index - 1]) {
            nums.splice(index - 1, 1)
            return getNums(nums, index)
        }
        return getNums(nums, index + 1)
    }
    return getNums(nums, 1)
};