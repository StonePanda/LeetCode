/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 其实就是判断最长公共子序列的问题，判断最长公共子序列长度是不是就是s的长度
    let dp = Array(s.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(t.length + 1).fill(0)
    }
    // 上面已经初始化完成
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    if (dp[s.length][t.length] == s.length) {
        return true
    }
    return false
};
// 这一道题比较简单，就是用了昨天的思路，没看教程，第一遍也过了
// 但是教程上还是有点不一样，说这是编辑距离题目
// 然后在else那里不是用的dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
// 而是直接dp[i][j]=dp[i][j-1],相当于t删除一个字符，s没变