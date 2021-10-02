/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // 确定dp数组及其下标的含义
    // 发现这个数组就是斐波那契数组
    if(n<=1) return n
    let dp=Array(n+1)
    // 确定递推公式，就是斐波那契数组的递推公式
    // 确定初始化
    dp[0]=1
    dp[1]=1
    // 确定循环顺序
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
    // 一次通过是少不了自己推导验证一下（第五步）！
};