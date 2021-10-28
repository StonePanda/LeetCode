/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // 首先肯定是一个二维动规数组
    // dp[i][j]是到word1[0,i-1]和word2[0,j-1]的最少操作数

    // 那么看递推公式
    // dp[i][j],如果word1[i,i-1]和word2[0,j-1]相等，那么是不需要操作的dp[i][j]=dp[i-1][j-1]

    // 如果不相等的话：
    // 有可能是替换，也有可能是删除，还有可能是增加
    // 先说替换：dp[i][j]=dp[i-1][j-1]+1
    // 然后是删除dp[i][j]=dp[i-1][j]+1  只有这个是确定的
    // 然后是增加dp[i][j]=？？？

    // 就是递推公式我都写不出来 我这个小笨蛋还是猜对一点点哦！
    // 替换操作我想的是正确的，我的理由是，替换word1[i-1]，也就相当于前面的都不变，word1[i-1]和word2[j-1]变成相同的，所以+1替换操作
    // 删除也是正确的
    // 但是增加的话，其实word1增加一个字符，相当于word2删除一个字符
    // 比如例子中的exection->execution,也相当后面那个删除一个字符
    // 所以增加：dp[i][j]=dp[i][j-1]+1

    // 那么递推公式就确定了
    // 那么初始化，和之前其实是一样的变成空字符串的操作嘛
    // dp[0][i]=i
    // dp[i][0]=i
    let dp = Array(word1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(word2.length + 1)
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
            }
        }
    }
    return dp[word1.length][word2.length]
};

// 大名鼎鼎的编辑距离，自己写的时候，在增长那里难住了，没有想出来递推公式！
// 这么经典的题目值得好好铭记！