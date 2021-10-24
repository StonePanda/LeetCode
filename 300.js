/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 用动态规划的方法做
    // dp[i]表示循环到nums[i]的时候，最长严格递增子序列的长度为dp[i]
    // 那么dp[i]和dp[i-1]的关系是：根据nums[i]和子序列来决定的

    // 这个实在是没有思路，所以直接看了教程
    // 对于每一个i来说，要比较的肯定是i之前的数字
    // 但是不能只有dp[i-1],而是比较每一个小于i的j dp[i]=Math.max(dp[i],dp[j]+1)
    // 关于初始化，dp[i]的每一个初始值肯定都是1
    let dp = Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // 这里比较大小不要忘记了！
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(dp)
    return dp[dp.length - 1]
};
// 这一道题自己完全没有思路
// 所以直接看了教程
// 但是提交后却出现了问题，在例子34/54的时候报错了
// [1,3,6,7,9,4,10,5,6]
// 错误原因其实是这一道题不是返回dp数组的最后一个值，而是最大值

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 用动态规划的方法做
    // dp[i]表示循环到nums[i]的时候，最长严格递增子序列的长度为dp[i]
    // 那么dp[i]和dp[i-1]的关系是：根据nums[i]和子序列来决定的

    // 这个实在是没有思路，所以直接看了教程
    // 对于每一个i来说，要比较的肯定是i之前的数字
    // 但是不能只有dp[i-1],而是比较每一个小于i的j dp[i]=Math.max(dp[i],dp[j]+1)
    // 关于初始化，dp[i]的每一个初始值肯定都是1
    let dp = Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // 这里比较大小不要忘记了！
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    dp.sort((a, b) => (b - a))
    return dp[0]
};