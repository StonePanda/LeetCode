/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    // 用上面是一回事儿
    // 下面用KMP算法来做一遍
    let m = needle.length
    if (m == 0) {
        return 0
    }
    let pi = new Array(m).fill(0)
        // pi就是对应的部分匹配值
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] != needle[j]) {
            j = pi[j - 1]
        }
        if (needle[i] == needle[j]) {
            j++
        }
        pi[i] = j
    }
    for (let i = 0, j = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1]
        }
        if (haystack[i] == needle[j]) {
            j++
        }
        if (j == m) {
            return i - m + 1
        }
    }
    return -1
};
// 好好记住KMP算法吧！！