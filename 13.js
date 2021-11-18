/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 罗马数字代表的字符应该是逐渐减小的，如果有增大的，那说明一起组成了一个数字
    // 分别是1000，900，500，400，100，90，50，40，10，9，5，4，1
    let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let strs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let result = 0
    for (let i = 0; i < s.length; i++) {
        if (i == s.length - 1) {
            result += vals[strs.indexOf(s[i])]
            break
        }
        if (vals[strs.indexOf(s[i])] < vals[strs.indexOf(s[i + 1])]) {
            let tmp = s[i] + s[i + 1]
            result += vals[strs.indexOf(tmp)]
            i++
        } else {
            result += vals[strs.indexOf(s[i])]
        }
    }
    return result
};