/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // 感觉怎么跟动态规划那种状态转移有点关系呢哈哈
    // 但其实不是的啦，因为这个是字符串值，不是整数值
    const says = new Array(n).fill('')
    says[0] = '1'
    for (let i = 1; i < says.length; i++) {
        says[i] = Say(says[i - 1])
    }
    return says[n - 1]
};

function Say(str) {
    let num = 1
    let tmp = ''
    let res = ''
    for (let i = 0; i < str.length; i++) {
        num = 1
        tmp = str[i]
        while (i < str.length - 1 && str[i] == str[i + 1]) {
            num++
            i++
        }
        res += (num.toString() + tmp.toString())
    }
    return res
}
// 上面是自己写的，通过了


// 下面是官方题解
var countAndSay = function(n) {
    let str = "1";
    for (let i = 2; i <= n; ++i) {
        const sb = [];
        let start = 0;
        let pos = 0;

        while (pos < str.length) {
            while (pos < str.length && str[pos] === str[start]) {
                pos++;
            }
            sb.push('' + (pos - start) + str[start]);
            start = pos;
        }
        str = sb.join('');
    }

    return str;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // 感觉怎么跟动态规划那种状态转移有点关系呢哈哈
    // 但其实不是的啦，因为这个是字符串值，不是整数值
    // 然后再看看官方题解写的
    let str = '1'
    for (let i = 2; i <= n; i++) {
        const sb = []
        let start = 0
        let pos = 0

        while (pos < str.length) {
            while (pos < str.length && str[pos] == str[start]) {
                pos++
            }
            sb.push('' + (pos - start) + str[start])
            start = pos
        }
        str = sb.join('')
    }
    return str
};
// 实际上思路是一样的，不过这个用的index