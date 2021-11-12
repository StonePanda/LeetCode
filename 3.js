/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 总觉得这道题非常之熟悉
    // 感觉这个用动态规划肯定行
    // 首先dp[i][j]的定义是：s[i,j]之间的最长子串长度是dp[i][j]
    // 那么递推公式，dp[i][j]的大小
    // 取决于dp[i+1][j]和s[i]是否能算作不重复的字符，if(s[i+1,j])里面有s[i],那么dp[i][j]=dp[i+1][j]
    // 如果没有，那么dp[i][j]=dp[i+1][j]+1
    // 同样还取决于dp[i][j-1],如果s[i,j-1]里面有s[j]，那么dp[i][j]=dp[i][j-1]
    // 如果里面没有s[j],那么dp[i][j]=dp[i][j-1]+1

    // 尝试了二维的不行，就尝试一下一维的动规
    // dp[i]的定义是s[0,i]之间的最长子串长度是dp[i]
    // 那么推导的话是：dp[i] 和 dp[i-1]的关系是，如果s[i]在里面没有的话，就dp[i]=dp[i-1]+1
    // 但是如果里面有的话，就保持不变dp[i]=dp[i-1],但是这种情况，如果s[i]==s[i-1]的话，dp[i]变回1

    // 上面不能保持不变，因为dp[i]的定义不能改变
    // 也不能让dp[i]变成1，因为如果里面有的，比如wpwk,如果里面有w的话，我们不应该全部舍弃前面的，而是从p开始
    if (s.length == 0) {
        return 0
    }
    let dp = new Array(s.length).fill(1)
    let start = 0
    let result = 1
    for (let i = 1; i < s.length; i++) {
        let findIndex = s.slice(start, i).lastIndexOf(s[i])
            // 这个findIndex是相对于start的
            // 那么在字符串中的绝对位置应该是findIndex+start
        if (findIndex == -1) {
            dp[i] = dp[i - 1] + 1
        } else {
            dp[i] = i - (findIndex + start + 1) + 1
            start = findIndex + start + 1
        }
        if (dp[i] > result) {
            result = dp[i]
        }
    }
    return result
};