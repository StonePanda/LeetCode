/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 以第一个字符串为例，去遍历数组，看看后面的都有没有这个字符串
    // 最简单的肯定是双for循环，但是不知道会不会超时！
    // 因为这个例子其实也比较少，所以应该不会超时！
    let flag = true
    let result = ''
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                flag = false
                break
            }
        }
        if (flag) {
            result += strs[0][i]
        } else {
            break
        }
    }
    return result
};