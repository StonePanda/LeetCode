/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // 不是很懂这道题的考察点，在js里好想有好多种实现方式
    let endindex = 0
    for (let i = 0; i < s.length; i++) {
        endindex = i
        if (s[i] == ' ') {
            k--
            // console.log(k)
        }
        if (k == 0) {
            break
        }
    }
    if (k == 0) {
        return s.substring(0, endindex)
    } else {
        return s
    }
};