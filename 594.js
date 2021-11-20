/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // 子序列，也就是说要找到两个相差为1的数，而且数最多
    nums.sort((a, b) => a - b)
        // 自然升序排序
        // 然后用map，来配对
    let numsmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        numsmap.set(nums[i], (numsmap.get(nums[i]) || 0) + 1)
    }
    let newArray = Array.from(new Set(nums))
        // 数组去重
    let result = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == 1) {
            let tmp = numsmap.get(nums[i]) + numsmap.get(nums[i - 1])
            if (tmp > result) {
                result = tmp
            }
        }
    }
    return result
};