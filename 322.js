/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//     if (amount == 0) {
//         return 0
//     }
//     coins.sort((a, b) => (a - b))
//         // 硬币数量是无限的，所以是完全背包问题
//         // dp[j]表示总额为j的最少硬币数为dp[j]
//     let dp = Array(amount + 1).fill(-1)
//     for (let i = 0; i <= amount; i++) {
//         for (let j = 0; j < coins.length; j++) {
//             // 初始化
//             if (i == coins[j]) {
//                 dp[i] = 1
//             }
//             // 递推公式
//             else if (i > coins[j] && dp[i - coins[j]] != -1) {
//                 dp[i] = dp[i - coins[j]] + 1
//             }
//         }
//     }
//     return dp[amount]
// };
// 自己第一遍就做错了
// 在例子98/188的时候错了：
// [186,419,83,408]
// 6249

// 这道题自己在写的时候就注意到了dp[j]=Math.min(dp[j-coins]+1,dp[j])
// 因为要取所有来源中最小的一个
// 递推公式确实是来自dp[j-coins[i]]+1
// 但是总觉得会被初始化覆盖，所以我搞了个愚蠢的方法
// 但是没有想到初始化为最大值的事情
// 另外JS的数据类型是个值得总结的点
// JS获取最大安全整数
// Number.MAX_SAFE_INTEGER

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (j = 0; j < coins.length; j++) {
            if (i == coins[j]) {
                dp[i] = 1
            } else if (i > coins[j] && dp[i - coins] != Number.MAX_SAFE_INTEGER) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    if (dp[amount] == Number.MAX_SAFE_INTEGER) {
        return -1
    }
    return dp[amount]
};