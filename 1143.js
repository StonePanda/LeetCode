/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // 这个跟数组718题目很类似，其实js里的字符串操作很多都和数组操作差不多吧
    // 回头可以总结一下
    // 注意dp数组比原来的长度+1
    // dp[i][j]表示字符串[0,i-1]和字符串[0,j-1]之间的最长公共子序列
    let dp = Array(text1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(text2.length + 1).fill(0)
    }
    let result = 0
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            if (dp[i][j] > result) {
                result = dp[i][j]
            }
        }
    }
    console.log(dp)
    return result
};
// 这一道题我自信满满地觉得应该和题目718相似，所以直接把代码相当于是copy了一遍
// 但是竟然不一样？
// 打印dp数组后知道了为什么
// 按照上面的代码去跑的话，只有斜对角的能加上，其他的无法累加
// 所以在text1[i-1]!=text2[j-1]的时候，也需要做一些处理！
// 那么在方格里看的话，dp[i][j]，要想累加斜对角之外的，就需要
// dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
// 这个在物理意义上也说的过去
// 但是不明白718那道题目
// 718题目是要明白子数组和子集的区别就可以了！
// 子数组要求连续！子集不要求！
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // 这个跟数组718题目很类似，其实js里的字符串操作很多都和数组操作差不多吧
    // 回头可以总结一下
    // 注意dp数组比原来的长度+1
    // dp[i][j]表示字符串[0,i-1]和字符串[0,j-1]之间的最长公共子序列
    let dp = Array(text1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(text2.length + 1).fill(0)
    }
    let result = 0
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            if (dp[i][j] > result) {
                result = dp[i][j]
            }
        }
    }
    // console.log(dp)
    return result
};