/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 和昨天做的原始版的打家劫舍区别就是今天这个是连成圈的
    // 这个和之前老师分糖果，有个人说的题目一样，孩子围成圈，老师分糖果
    // 改变就是偷了第一个，就没办偷最后一个了
    // 还是假设dp[i]表示偷盗第i个房子的时候所得到的最高金额为dp[i]
    // 那么dp[i]的递推公式，dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    // 这种环形的题目以后肯定还会遇到
    // 自己确实也没想出来解决办法
    // 就记住教程里的算法吧
    // 成环的情况就考虑两种：
    // 考虑首，不考虑尾。
    // 考虑尾，不考虑首。
    let dp1 = Array(nums.length - 1).fill(0)
    let dp2 = Array(nums.length - 1).fill(0)
        // 只考虑尾部，不考虑首
    dp1[0] = nums[1]
    dp1[1] = Math.max(nums[1], nums[2])
    for (let i = 2; i < dp1.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i + 1])
    }
    // 只考虑首部，不考虑尾
    dp2[0] = nums[0]
    dp2[1] = nums[1]
    for (let i = 2; i < dp2.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
    }
    console.log(dp1)
    console.log(dp2)
    return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
};
// 看了教程后还是错了，在例子72/75的时候错了
// [4,1,2,7,5,3,1]


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 和昨天做的原始版的打家劫舍区别就是今天这个是连成圈的
    // 这个和之前老师分糖果，有个人说的题目一样，孩子围成圈，老师分糖果
    // 改变就是偷了第一个，就没办偷最后一个了
    // 还是假设dp[i]表示偷盗第i个房子的时候所得到的最高金额为dp[i]
    // 那么dp[i]的递推公式，dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    // 这种环形的题目以后肯定还会遇到
    // 自己确实也没想出来解决办法
    // 就记住教程里的算法吧
    // 成环的情况就考虑两种：
    // 考虑首，不考虑尾。
    // 考虑尾，不考虑首。
    let dp1 = Array(nums.length - 1).fill(0)
    let dp2 = Array(nums.length - 1).fill(0)
        // 只考虑尾部，不考虑首
    dp1[0] = nums[1]
    dp1[1] = Math.max(nums[1], nums[2])
    for (let i = 2; i < dp1.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i + 1])
    }
    // 只考虑首部，不考虑尾
    dp2[0] = nums[0]
    dp2[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < dp2.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
    }
    console.log(dp1)
    console.log(dp2)
    return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
};
// 结果发现又是我在初始化dp[1]的时候报错了