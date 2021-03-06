/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // 这一道题不再判断是不是子序列，以及最长子序列的长度，这些都是只要是，或者只要一个子序列就可以了
    // 这次出现了个数问题
    // 假如我们还是用二维动规数组dp[i][j]表示s[0,i-1]在t[0,j-1]中出现的方案个数为dp[i][j]
    // 那么dp[i][j]和dp[i-1][j-1]的关系是dp[i][j]=dp[i-1][j-1]*s[i]在t中出现的次数，但是还要保证后面的顺序也要一致，所以前面这个是不对的
    // 还有一种方式，我能想到的，就是找出s中长度为t的子序列，然后再找到其中等于t的个数
    // 不对不对！想想之前得到的dp数组，只要判断出dp[i][j]==s.length的个数不就行了！嗨！小笨蛋！嘿嘿！
    // 结果代码一跑，就发现上面的思路不对！
    // 然后我又想到去计算dp[i][j]+1的次数，结果代码一跑，还是不对
    // 放弃了，看教程！

    // 看了教程，dp[i][j]的定义跟我第一遍想的一样，但是我的递推公式出错了！
    // 这道题和前面那个考虑删掉字母的一样：
    // 确定递推公式：
    // 考虑两种情况，s[i-1]==t[j-1]和s[i-1]!=t[j-1]
    // 当s[i-1]和t[j-1]相等的时候，我们之前是dp[i][j]=dp[i-1][j-1]+1
    // 但是之前的公式，是统计的公共子序列的个数，所以发现了一个新相等的字母，所以+1
    // 但是现在是可能的个数，所以dp[i][j]=dp[i-1][j-1],这是现阶段这个字母相等之后，用这个s[i-1]的个数
    // 但是也有可能不用s[i-1],也有可能是s[i-1]之前的，比如s:bagg和t:bag,就是s[3]==t[2],但是s[2]==t[2]
    // 那么dp[i][j]还有可能由dp[i-1][j]来组成，这个在二维数组里可能比较看得出来，就是列不变，但是也有可能是行之前的东西来组成
    // 所以递推公式dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
    // 当s[i-1]!=t[j-1]的时候，那么肯定是不用s[i-1]来匹配，所以dp[i][j]=dp[i-1][j]

    // 递推公式推出来之后，考虑初始化的问题
    // 铭记dp[i][j]的意义是s[0,i-1]的子序列中t[0,j-1]出现的个数
    // 所以当j=0的时候，也就是s[0,i-1]子序列中出现空字符串的个数，那么一定是1，也就是全部删除完字符，出现的就是空字符串
    // 当i=0的时候，也就是空字符串的子序列中中出现t[0][j-1]的个数，那么一定是0
    // 而i=0，j=0的时候，就是1，也就是空字符串的子序列中出现空字符串的个数，所以是1
    let dp = Array(s.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(t.length + 1)
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let j = 1; j < dp[0].length; j++) {
        dp[0][j] = 0
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[s.length][t.length]
};

// 距离编辑估计也是一套题目呢，就是删除字符，这个也是根据教程做的
// 但是看懂了，但是估计需要加强练习