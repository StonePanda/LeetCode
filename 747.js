/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length == 1) {
        return 0
    }
    // 循环一遍，一边找最大的数，一边找次大的数
    let max = -1
    let nextMax = -1
    let ans = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            nextMax = max
            max = nums[i]
            ans = i
        }
    }
    if (max >= nextMax * 2) {
        return ans
    }
    return -1
};
// 找最大的数和次大的数，我上面的想法不对
// 不对的例子：[0,0,3,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length == 1) {
        return 0
    }
    // 循环一遍，一边找最大的数，一边找次大的数
    let max = -1
    let nextMax = 0
    let ans = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            ans = i
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (max - nextMax > max - nums[i] && max - nums[i] != 0) {
            // 差距更小
            nextMax = nums[i]
        }
    }
    // console.log(max,nextMax)
    if (max >= nextMax * 2) {
        return ans
    }
    return -1
};
// 上面是自己写的，调试了两遍才通过

var dominantIndex = function(nums) {
    let m1 = -1,
        m2 = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1;
            m1 = nums[i];
            index = i;
        } else if (nums[i] > m2) {
            m2 = nums[i];
        }
    }
    return m1 >= m2 * 2 ? index : -1;
};
// 上面是官方题解，官方就是只遍历了一次学习一下！
// 发现我之前的想法是少了else if，确实，一次遍历能解决的问题！


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let m1 = -1,
        m2 = -2;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1
            m1 = nums[i]
            index = i
        } else if (nums[i] > m2) {
            m2 = nums[i]
        }
    }
    return m1 >= m2 * 2 ? index : -1
};
// 一次遍历找到最大值和次大值，记好咯！