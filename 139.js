/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 这个直接套用完全背包的话，可能有一点奇怪
    // 但确实是完全背包，只不过是放入法则发生了改变
    // 背包就是字符串s，物品就是wordDict
    // dp[i]的意义就是s.substring(0,i)是否能装下字典里的单词
    // dp[i]的递推公式 由dp[i-wordDict[j].length]&&s.substring(i-wordDict[j].length,i)==wordDict[j]
    // dp[i]的取值只有true和false两种
    // 初始化的时候，dp[0]==false
    // 先遍历物品还是先遍历背包呢？
    // 这道题是一个排列还是组合问题？感觉这个问题在这里没有太大的意义
    // 我本意是想通过组合和排列来判断先遍历物品还是先遍历容量
    // 但是我仔细想了下，这道题应该先遍历容量
    // 先对dp进行初始化
    let dp = Array(s.length + 1).fill(false)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            // 初始化
            if (s.substring(0, i) == wordDict[j]) {
                dp[i] = true
            } else if (i >= wordDict[j].length) {
                dp[i] = dp[i] || (dp[i - wordDict[j].length] && (s.substring(i - wordDict[j].length, i) == wordDict[j]))
            }
        }
    }
    return dp[s.length]
};
// 自己第一遍做的就过啦~