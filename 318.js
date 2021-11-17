/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    // 理论上来说是两个for循环循环words数组，然后再比较数组内是否有重复字母的时候
    // 也是1个for循环，相当于3个循环内嵌！
    // 感觉会超时，但是先试试吧
    function isRepeat(s1, s2) {
        if (s1.length > s2.length) {
            [s1, s2] = [s2, s1]
        }
        for (let i = 0; i < s1.length; i++) {
            if (s2.indexOf(s1[i]) != -1) {
                // console.log(s1,s2)
                return true
            }
        }
        // console.log(s1,s2)
        return false
    }
    let result = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!isRepeat(words[i], words[j])) {
                let tmp = words[i].length * words[j].length
                if (tmp > result) {
                    result = tmp
                }
            }
        }
    }
    return result
};
// 竟然也通过了！而且没有超时！