/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 分别是1000，900，500，400，100，90，50，40，10，9，5，4，1
    let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let strs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let result = ''
    for (let i = 0; i < vals.length; i++) {
        if (num < vals[i]) {
            continue
        }
        if (num <= 0) {
            break
        }
        let tmp = Math.floor(num / vals[i])
        if (tmp > 0) {
            result += strs[i].repeat(tmp)
        }
        num -= vals[i] * tmp
    }
    return result
};