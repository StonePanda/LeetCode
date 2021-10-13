/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    // 完全背包问题
    // 定义dp[j]的意义：总金额为j的时候，有dp[j]种方式可以凑成总金额
    // 那么递推公式dp[j]+=dp[j],dp[j-coins[i]]
    // 这个跟前面目标和那道题目一样，dp[0]=1初始化的基础
    // 这里注意看教程，关于排列和组合的问题
    // 这道题显然是组合问题
    let dp=Array(amount+1).fill(0)
    dp[0]=1
    // 排列问题，就是先遍历容量，再遍历物品
    // 组合问题，是先遍历物品,再遍历容量
    for(let i=0;i<coins.length;i++)
    {
        // 这种是前面的01背包的循环，就是j倒叙循环，但是完全背包，是正序的，因为一个物品可以反复放
        for(let j=coins[i];j<=amount;j++)
        {
            dp[j]+=dp[j-coins[i]]
        }
    }
    return dp[amount]
};

// 这道题也是看教程写的