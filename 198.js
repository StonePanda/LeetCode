/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     // 很经典的算法题目
//     // dp[i]的意义是偷到第i家所获取的最大金额
//     // 那么dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
//     // 但是这道题比较难的是初始化
//     // 显然，dp[0],dp[1]都需要初始化
//     if (nums.length == 1) {
//         return nums[0]
//     }
//     if (nums.length == 2) {
//         return Math.max(nums[0], nums[1])
//     }
//     if (nums.length == 3) {
//         return Math.max(nums[0] + nums[2], nums[1])
//     }
//     let dp = Array(nums.length).fill(0)
//         // 感觉这里似曾相识，但是想不起来之前那道题教程里怎么做的了！
//     dp[0] = nums[0]
//     dp[1] = nums[1]
//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
//     }
//     return dp[nums.length - 1]
// };
// 上面的算法在例子64/68的时候报错了：
// [2,1,1,2]
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 很经典的算法题目
    // dp[i]的意义是偷到第i家所获取的最大金额
    // 那么dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    // 但是这道题比较难的是初始化
    // 显然，dp[0],dp[1]都需要初始化
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    if (nums.length == 3) {
        return Math.max(nums[0] + nums[2], nums[1])
    }
    let dp = Array(nums.length).fill(0)
        // 感觉这里似曾相识，但是想不起来之前那道题教程里怎么做的了！
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1], nums[0])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
};
// 然后仔细想了一下，dp[1]的取值应该是前面两个之中比较大的那个