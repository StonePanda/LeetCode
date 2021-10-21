/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     // 画成图的时候,意义是比较明显的,就是获取反差最大的两段
//     // 但是要用动态规划的方法做
//     // dp[i]依然是二维数组
//     // dp[i][0]表示这一天买入,还是不买入情况下持有的股票
//     // dp[i][1]表示这一天卖出还是不卖出情况下现有的一笔收益
//     // 受益持续增长的情况下不需要卖出
//     if (prices.length == 1) {
//         return 0
//     }
//     let dp = Array(prices.length)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(2)
//     }
//     dp[0] = [-prices[0], 0]
//         // 感觉跟122一样,还是我的dp数组定义的不好,或者没有理解透彻定义
//     for (let i = 1; i < dp.length; i++) {
//         dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
//             // 持有股票更换,收益清0
//         if (dp[i][0] != dp[i - 1][0]) {
//             dp[i][1] = 0
//         } else {
//             dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
//                 // 卖出之后,立马买入
//             if (dp[i][1] != dp[i - 1][1]) {
//                 dp[i][0] = -prices[i]
//             }
//         }

//     }
//     dp.sort((a, b) => (b[1] - a[1]))
//     return dp[0][1] + dp[1][1]
// };
// 这种题目难就难在dp数组的定义老是模糊不清啊！
// 第一遍我自己写的在例子148/214的时候就报错了：
// [6,1,3,2,4,7]
// 放弃了，看教程

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 画成图的时候,意义是比较明显的,就是获取反差最大的两段
    // 但是要用动态规划的方法做
    // 这一题和前面做的完全不一样
    // 不再是二维数组,而是,一天总共有五个状态
    // dp[i][j]中的i表示第i天,而j表示今天的哪个状态:
    // 0 完全不操作 1 第一次买入 2 第一次卖出
    // 3 第二次买入 4 第二次卖出
    // dp[i][j]表示第i天第j种操作的情况下所持有的最大金额
    // 那么:
    if (prices.length == 1) {
        return 0
    }
    let dp = Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(5)
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = prices[0] + dp[0][1]
    dp[0][3] = -prices[0]
    dp[0][4] = prices[0] + dp[0][3]
    for (let i = 1; i < dp.length; i++) {
        // 就定义来说,感觉这一点有点奇怪
        // 难道不应该是昨天所有操作中的最大金额嘛？
        dp[i][0] = dp[i - 1][0]
            // 要么是昨天第一次买入，要么昨天没操作，今天第一次买入
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
            // 要么是昨天第一次卖出，要么是昨天买入，今天卖出
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
            // 要么昨天是第二次买入，要么是今天是第二次买入，那么昨天一定要卖出
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }
    return dp[prices.length - 1][4]
};

// 就是很奇怪的操作！感觉还不如用就是分析出来prices的趋势，计算两个最大的升段之和