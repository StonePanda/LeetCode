/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    // 给出有效字符串的嵌套最大深度
    // 就是给出栈的最大长度呗！
    let ans = 0
    let stack = 0
    for (let ch of s) {
        if (ch == '(') {
            stack += 1
            ans = Math.max(ans, stack)
        } else if (ch == ')') {
            stack -= 1
        }
    }
    return ans
};
// 有了昨天那道题，这道题很容易就想到栈