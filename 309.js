/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 对于第i天股票，有三种状态：0买入，1卖出，2冷冻期
    // dp[i][j]表示第i天进行第j种操作所获取的最大金额
    // 对于买入，前一天只能是冷冻期,才能买入，或者不买,之前买过
    // dp[i][0]=Math.max(dp[i-1][2]-prices[i],dp[i-1][0])
    // 对于卖出，前一天是买入,这一天是卖出，或者是不卖，前一天卖过
    // dp[i][1]=Math.max(dp[i-1][0]+prices[i],dp[i-1][1])
    // 对于冷冻期,是冷冻期，或者不是冷冻期
    // dp[i][2]=Math.max(dp[i-1][1],dp[i-1][2])
    let dp = Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(3)
    }
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][0])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }
    dp[dp.length - 1].sort((a, b) => (b - a))
    return dp[dp.length - 1][0]
};
// 自己写的时候都完全不确定，结果竟然一遍过！神奇！
// 其实最后一点不是很确定，之前的题目好像最后是直接返回卖出，我还是排序了一下
// 然后输出最大值

// 教程里的是按照四个状态来的：
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 这是教程里的做法：
    // 每天的股票有四种状态：
    // 0，买入股票状态，可能是今天买的，可能是前一天买的，今天保持
    // 今天买的话，昨天肯定是过了冷冻期的状态或者昨天是冷冻期的状态
    // 卖出股票状态：
    // 1：两天前卖出了股票，已经经过冷冻期，今天保持卖出股票状态
    // 2：今天卖出股票
    // 3：冷冻期状态：冷冻期状态不可持续，只能保持一天
    // 根据上面的状态推测递推公式：
    // dp[i][0]=Math.max(dp[i-1][0],Math.max(dp[i-1][1],dp[i-1][3])-prices[i])
    // dp[i][1]=Math.max(dp[i-1][1],dp[i-1][3])
    // dp[i][2]=dp[i-1][0]+prices[i]
    // dp[i][3]=dp[i-1][2]
    let dp = Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(4)
    }
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0
    dp[0][3] = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
        dp[i][2] = dp[i - 1][0] + prices[i]
        dp[i][3] = dp[i - 1][2]
    }
    return Math.max(dp[dp.length - 1][3], Math.max(dp[dp.length - 1][1], dp[dp.length - 1][2]))
};