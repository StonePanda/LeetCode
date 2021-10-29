// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestPalindromeSubseq = function(s) {
//     // 这个和前面的回文子串的区别是，这一道题可以删除字符
//     // 还是先用一维数组，dp[j]表示s[0,j]中的最长回文子序列长度为dp[j]
//     // 那么递推公式，肯定是判断nums[j]加入后还能不能是回文子序列，但是要判断回文的花，我就觉得还是像上一个题目一样用二维数组比较好
//     // dp[i][j]表示s[i,j]之间得最长回文子序列长度
//     // 如果s[i]!=s[j]，那么长度肯定是不变的，dp[i][j]=dp[i+1][j-1]
//     // 那么还是分为两种情况j-i<=1，那么肯定还是回文子序列，而且长度就是j-i+1 长度就是dp[i][j]=j-i+1
//     // 如果j-i>1,而且dp[i+1][j-1]==j-1-i(也就是是回文)，那么dp[i][j]=dp[i+1][j-1]+2
//     // 那如果里面不是回文，那就还是保持就行了dp[i][j]=dp[i+1][j-1]
//     let dp = Array(s.length)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(s.length).fill(1)
//     }
//     let result = 0
//     for (let i = dp.length - 1; i >= 0; i--) {
//         for (let j = 0; j < dp[0].length; j++) {
//             if (i <= j) {
//                 if (s[j] == s[i] && (j - i) <= 1) {
//                     dp[i][j] = j - i + 1
//                 } else if (s[j] == s[i] && (j - i) > 1 && dp[i + 1][j - 1] == j - i - 1) {
//                     dp[i][j] = dp[i + 1][j - 1] + 2
//                 } else {
//                     dp[i][j] = dp[i + 1][j - 1]
//                 }
//                 if (dp[i][j] > result) {
//                     result = dp[i][j]
//                 }
//             }
//         }
//     }
//     console.log(dp)
//     return result
// };

// 上面的代码只是记录一下，因为我在跑第一个例子的时候就不对，不对在没有考虑字符串可以删除

// 考虑删除后，对上面的算法做了改进，但是还是不对：应该就是算法的想法错了
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestPalindromeSubseq = function(s) {
//     // 这个和前面的回文子串的区别是，这一道题可以删除字符
//     // 还是先用一维数组，dp[j]表示s[0,j]中的最长回文子序列长度为dp[j]
//     // 那么递推公式，肯定是判断nums[j]加入后还能不能是回文子序列，但是要判断回文的花，我就觉得还是像上一个题目一样用二维数组比较好
//     // dp[i][j]表示s[i,j]之间得最长回文子序列长度
//     // 如果s[i]!=s[j]，那么长度肯定是不变的，dp[i][j]=dp[i+1][j-1]
//     // 那么还是分为两种情况j-i<=1，那么肯定还是回文子序列，而且长度就是j-i+1 长度就是dp[i][j]=j-i+1
//     // 如果j-i>1,而且dp[i+1][j-1]==j-1-i(也就是是回文)，那么dp[i][j]=dp[i+1][j-1]+2
//     // 那如果里面不是回文，那就还是保持就行了dp[i][j]=dp[i+1][j-1]
//     let dp = Array(s.length)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(s.length).fill(0)
//     }
//     let result = 0
//     for (let i = dp.length - 1; i >= 0; i--) {
//         for (let j = 0; j < dp[0].length; j++) {
//             if (i <= j) {
//                 if (s[i] == s[j]) {
//                     if (j - i <= 1) {
//                         dp[i][j] = j - i + 1
//                     } else if (j - i > 1 && dp[i + 1][j - 1] == j - i - 1) {
//                         dp[i][j] = dp[i + 1][j - 1] + 2
//                     } else {
//                         // 两边虽然相等，但是里面却不是回文子串，那么应该还是删除左边，删除右边，或者两边都删除，比较最大值
//                         dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j - 1], dp[i][j - 1])
//                     }
//                 } else {
//                     // 这个时候是不相等，那么我就删除不相等的字符，那有可能删除左边，删除右边，或者两边都删除了
//                     dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j - 1], dp[i][j - 1])
//                 }
//                 if (dp[i][j] > result) {
//                     result = dp[i][j]
//                 }
//             }
//         }
//     }
//     console.log(dp)
//     return result
// };

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // 这个和前面的回文子串的区别是，这一道题可以删除字符
    // 还是先用一维数组，dp[j]表示s[0,j]中的最长回文子序列长度为dp[j]
    // 那么递推公式，肯定是判断nums[j]加入后还能不能是回文子序列，但是要判断回文的花，我就觉得还是像上一个题目一样用二维数组比较好
    // dp[i][j]表示s[i,j]之间得最长回文子序列长度
    // 如果s[i]!=s[j]，那么长度肯定是不变的，dp[i][j]=dp[i+1][j-1]
    // 那么还是分为两种情况j-i<=1，那么肯定还是回文子序列，而且长度就是j-i+1 长度就是dp[i][j]=j-i+1
    // 如果j-i>1,而且dp[i+1][j-1]==j-1-i(也就是是回文)，那么dp[i][j]=dp[i+1][j-1]+2
    // 那如果里面不是回文，那就还是保持就行了dp[i][j]=dp[i+1][j-1]


    // 看了看教程，可以说是让我大为震惊！
    // dp[i][j]的定义是正确的，但是递推公式完全错误啦！
    // 分两种：s[i]==s[j]的时候，dp[i][j]=dp[i+1][j-1]+2
    // 这里为什么要直接+2，我之前的想法是里面是回文才能+2，但是里面也可以不是回文啊，只要最长的回文子串，然后两边加上相同的字母！肯定是回文啊啊！
    // 第二种是两边不相等，那么dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1],dp[i+1][j-1]),加上左边的字符，或者右边的，或者是两边都不加

    let dp = Array(s.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(s.length).fill(0)
    }
    let result = 0
    for (let i = dp.length - 1; i >= 0; i--) {
        for (let j = 0; j < dp[0].length; j++) {
            if (i <= j) {
                if (s[i] == s[j]) {
                    if (j - i <= 1) {
                        dp[i][j] = j - i + 1
                    } else {
                        dp[i][j] = dp[i + 1][j - 1] + 2
                    }
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1], dp[i + 1][j - 1])
                }
                if (result < dp[i][j]) {
                    result = dp[i][j]
                }
            }
        }
    }
    return result
};
// 上面是看了教程后！脑子要清醒！