/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 受昨天那个二叉树的影响
    // 今天的dp[i]我也觉得是一个二维数组[0]表示在这一天买入
    // [1]表示在这一天卖出
    // dp[i][0]=Math.max(-nums[i],dp[i-1][0])
    // dp[i][1]=Math.max(prices[i]+dp[i-1][0],dp[i-1][1])
    // 所以初始化的时候只需要初始化dp[0]就可以了
    let dp = Array(prices.length).fill(Array(2))
        // js二维数组的初始化不能忘记！
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(-prices[i], dp[i - 1][0])
        dp[i][1] = Math.max(prices[i] + dp[i - 1][0], dp[i - 1][1])
    }
    if (dp[dp.length - 1][1] <= 0) {
        return 0
    }
    return dp[dp.length - 1][1]
};
// 自己做的，第一遍就通过了
// 但是要注意，js里的二维数组一定要初始化
// 然后是prices数组不是nums数组
// 然后还有dp[i][1]的时候肯定也要取最大值，我却没想到