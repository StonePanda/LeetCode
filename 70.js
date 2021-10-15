/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 确定dp数组及其下标的含义
    // 发现这个数组就是斐波那契数组
    if (n <= 1) return n
    let dp = Array(n + 1)
        // 确定递推公式，就是斐波那契数组的递推公式
        // 确定初始化
    dp[0] = 1
    dp[1] = 1
        // 确定循环顺序
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
        // 一次通过是少不了自己推导验证一下（第五步）！
};

// 用完全背包的方式有些了一遍代码
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 用背包问题再来爬一次楼梯
    // 相当于物品是1和2，然后是完全背包问题
    // 书包的总容量是n
    let dp = Array(n + 1).fill(0)
    dp[0] = 1
        // 是排列问题，就是有顺序的
        // 排列问题，必须先遍历容量
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= 2; j++) {
            if (i >= j) {
                dp[i] += dp[i - j]
            }
        }
    }
    return dp[n]
};