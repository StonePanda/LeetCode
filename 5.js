/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 贪心算法？
    // 肚子痛！事情多！懒得搞了！
    // 直接看了题解！发现确实动规就可以解决的！
    // dp[i][j]表示字符串i到j之间是回文子串，就是true，不是回文子串，就是false
    let dp = new Array(s.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length).fill(false)
    }
    // 递推公式和昨天那个最长非重复子序列的推导有一点像
    // dp[i][j]当i==j的时候，也是true
    // dp[i][j]当j-i==1的时候，dp[i][j]=(s[i]==s[j])
    // dp[i][j]可以由dp[i+1][j]推导而来，如果s[i]!=s[j],那么肯定是false
    // 如果s[i]==s[j],dp[i][j]取决于dp[i+1][j-1]是不是回文字符串
    // dp[i][j]=(s[i]==s[j]) && dp[i+1][j-1]

    // 那么i肯定是从大到小，j是从小到大
    // 当dp[i][j]==true的时候，长度就是j-i+1,一直记录最大值即可

    // 如果是字符串的处理，先试试可不可以动态规划，二维了不行，就试试一维
    let result = 0
    let start = 0
    let end = 0
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < s.length; j++) {
            if (i == j) {
                dp[i][j] = true
            }
            if (i == j - 1) {
                dp[i][j] = (s[i] == s[j])
            }
            if (i + 1 <= j - 1) {
                dp[i][j] = (s[i] == s[j]) && dp[i + 1][j - 1]
            }
            if (dp[i][j]) {
                if (j - i + 1 > result) {
                    result = j - i + 1
                    start = i
                    end = j
                }
            }
        }
    }
    return s.slice(start, end + 1)
};