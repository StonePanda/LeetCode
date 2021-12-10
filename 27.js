/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length == 0) {
        return nums.length
    }

    function getNumsLen(nums, val, index) {
        if (index >= nums.length) {
            return nums.length
        }
        if (nums[index] == val) {
            nums.splice(index, 1)
            return getNumsLen(nums, val, index)
        }
        return getNumsLen(nums, val, index + 1)
    }
    return getNumsLen(nums, val, 0)
};
// 为什么同样的方法，这个却可以击败更多人？？
// 感觉其实while循环应该也可以！