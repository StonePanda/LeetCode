/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let tmp = 1
    let result = 1
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            continue
        }
        if (s[i] == s[i - 1]) {
            tmp += 1
        } else {
            tmp = 1
        }
        if (result < tmp) {
            result = tmp
        }
    }
    return result
};