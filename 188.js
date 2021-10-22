/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(k, prices) {
//     if (k == 0 || prices.length == 0) {
//         return 0
//     }
//     let upparts = [0]
//         // 假如不用动规的方法做这道题目
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] >= prices[i - 1]) {
//             upparts[upparts.length - 1] += prices[i] - prices[i - 1]
//         } else {
//             upparts.push(0)
//         }
//     }
//     // 降序排列
//     console.log(upparts)
//     upparts.sort((a, b) => (b - a))
//     console.log(upparts)
//     let result = 0
//     for (let i = 0; i < k && i < upparts.length; i++) {
//         result += upparts[i]
//     }
//     return result
// };
// 上面这段代码考虑的是升段就是可以获得的收益，但是实际上不是
// 在例子200/211的时候报错了：
// 2
// [1,2,4,2,5,7,2,4,9,0]
// 所以这就是这道题必须用动态规划的原因

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k == 0 || prices.length == 0) {
        return 0
    }
    // 所以还是按照教程的思路，这道题和昨天那道买卖股票3的区别
    // 就是2变成了k
    // 但其实情况肯定都是不变的，所以总情况数：
    // 2*k+1
    let dp = Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(2 * k + 1)
    }
    // 初始化
    dp[0][0] = 0
        // 奇数天都是买入
    for (let i = 1; i < 2 * k + 1; i += 2) {
        dp[0][i] = -prices[0]
    }
    // 偶数天都是卖出
    for (let i = 2; i < 2 * k + 1; i += 2) {
        dp[0][i] = 0
    }
    // 遍历肯定是从小到大
    // 那么递推公式(举例)：
    // 买入：昨天卖出今天买入，或者沿用前一天买入的状态！！这里没弄对！
    // dp[i][3]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
    // 卖出：昨天买入，今天卖出，第二种沿用昨天卖出的情况
    // dp[i][4]=Math.max(dp[i-1][0]+prices[i],dp[i-1][3]+prices[i])
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = 0
            // 第k次买入、卖出
        for (let j = 1; j <= k; j++) {
            // 主要是买入那天，上次卖出这次买入，这次不买，沿用上次的卖出状态
            dp[i][j * 2 - 1] = Math.max(dp[i - 1][j * 2 - 2] - prices[i], dp[i - 1][j * 2 - 1])
                // 卖出那天，上次买入这次卖出，这次不卖，沿用昨天买入的情况
            dp[i][j * 2] = Math.max(dp[i - 1][j * 2 - 1] + prices[i], dp[i - 1][j * 2])
        }
    }
    return dp[dp.length - 1][2 * k]
};