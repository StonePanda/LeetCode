/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // 可以看出这也是一个完全背包问题
    // 总额是可以确定的，但是这一道题的物品数量是没有直接给出的
    // js里对数字求平方Math.pow(x,2),对数字开方Math.sqrt(x)
    let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
        // 这道题忘记说了，0不是完全平方数
    dp[0] = 0
        // dp[j]=dp[j-nums[i]]+1
        // 先获取nums数组吧
    let nums = Array(parseInt(Math.sqrt(n)) + 1)
    nums[0] = 0
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.pow(i, 2)
    }
    // console.log(nums)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i == nums[j]) {
                dp[i] = 1
            } else if (i > nums[j] && dp[i - nums[j]] != Number.MAX_SAFE_INTEGER) {
                dp[i] = Math.min(dp[i], dp[i - nums[j]] + 1)
            }
        }
    }
    return dp[n]
};