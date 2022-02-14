/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 如果p里面有*，那么无论如何都是true
    // 根据示例5，知道不是那样的
    // 就先从最简单的开始
    // 顺便复习一下KMP算法
    if (!p.includes('*') && !p.includes('?')) {
        // 最简单的就是什么都不含
        if (s.length != p.length) {
            return false
        }
        let KMPres = KMP(s, p)
        if (KMPres == 0) {
            return true
        }
        return false
    } else if (p.includes('?') && !p.includes('*')) {
        // 含有问号，不含星号
        // 这时候问号只能匹配单个字符
        if (p.length != s.length) {
            return false
        }
        for (let i = 0; i < p.length; i++) {
            if (p[i] == '?') {
                p.split(i, 1, s[i])
            }
        }
        let KMPres = KMP(s, p)
        if (KMPres == 0) {
            return true
        }
        return false
    } else if (!p.includes('?') && p.includes('*')) {
        // 只含有*的，那就是只要*两边的字符串在字符串能找到，而且是顺序不变的
        let arrX = p.split('*')
        let index = []
        let tmpi
        for (let i = 0; i < arrX.length; i++) {
            tmpi = KMP(s, arrX[i])
            if (tmpi == -1) {
                return false
            } else {
                if (index.length == 0 || index[index.length - 1] <= tmpi) {
                    index.push(tmpi + arrX[i].length)
                } else {
                    return false
                }
            }
        }
        if (index.length == arrX.length) {
            return true
        }
    } else {
        // 两个都含有的
        // 不太会呀！！
    }
};

const KMP = (s, p) => {
    const pLen = p.length
    const sLen = s.length
    if (pLen == 0) {
        return 0
    }
    let re = new Array(pLen).fill(0)
    for (let i = 1, j = 0; i < pLen; i++) {
        while (j > 0 && p[i] !== p[j]) {
            j = re[j - 1]
        }
        if (p[i] == p[j]) {
            j++
        }
        re[i] = j
    }
    for (let i = 0, j = 0; i < sLen; i++) {
        while (j > 0 && s[i] != p[j]) {
            j = re[j - 1]
        }
        if (s[i] == p[j]) {
            j++
        }
        if (j == pLen) {
            return i - pLen + 1
        }
    }
    return -1
}

// 上面是自己写的未完成的！怎么最近就是写不了动态规划的题目啊！
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length,
        n = p.length

    // 状态定义：dp[i][j] 表示 s 的前 i 个字符和 p 的前 j 个字符是否匹配
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))

    // 状态初始化
    // 1. 空字符串和空字符串是匹配的
    dp[0][0] = true
    for (let i = 1; i <= n; i++) {
        // 3. 空字符串和 * 是匹配的
        if (dp[0][i - 1] && p[i - 1] == '*') {
            dp[0][i] = true
        }
    }

    // 状态转移
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
        }
    }

    return dp[m][n]
};

// 作者： tangweiqun
// 链接： https: //leetcode-cn.com/problems/wildcard-matching/solution/dong-tai-gui-hua-dai-zhu-shi-by-tangweiqun/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。

// 官方题解没有


// 下面是自己写的
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 年前残留的题目
    // 题解是用的动态规划做的
    const m = s.length
    n = p.length

    // dp状态定义：dp[i][j]表示s的前i个字符和p的前j个字符是否匹配
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
        // 这里用到的map，再复习一下，年前学习的都忘掉了
        // 必须得先fill之后，每一个再map一下，不然得到得是空属性，什么都没有

    // 状态初始化
    // 空字符串和空字符串匹配
    dp[0][0] = true
    for (let i = 1; i <= n; i++) {
        // 前面得都匹配，那么再加一个*也是匹配的
        // 那么第一行就被填满了，第一列其实就是看s是否为空
        // 如果为空，第一列全部都是true，如果不为空，第一列全是false，如果为空，dp[0][0]也代表了，如果不为，本身就是false，不用更改就可以了
        if (dp[0][i - 1] && p[i - 1] == '*') {
            dp[0][i] = true
        }
    }

    // 状态转移
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '?') {
                // 如果现在这个字符可能相等，那么状态就是之前的状态
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] == '*') {
                // 如果第j个字符是*
                // 那么就看前面的字符是否匹配
                // 如果前面的都能匹配，*是空字符就可以了
                // 如果前面的不匹配，那就需要使用这个星号
                // 为什么是从[i-1][j]转移过来其实我没懂
                // 物理意义可能需要想一下
                // 就是看前面有字母的部分是否完全匹配了，匹配了，那后面就都是true，只要前面有true，递推过来后面都是true
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
        }
    }

    return dp[m][n]
}