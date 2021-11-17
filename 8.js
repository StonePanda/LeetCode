/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const MAX_VAL = Math.pow(2, 31) - 1
    const MIN_VAL = -Math.pow(2, 31)
        // 读入字符串并丢弃无用的前导空格
    let symbol = true
    s = s.trimStart()
    if (s.length == 0) {
        return 0
    }
    if (s[0] >= '0' && s[0] <= '9') {
        return getResult(s, symbol)
    } else if (s[0] == '-') {
        symbol = false
        s = s.substring(1, s.length)
        let result = getResult(s, symbol)
        return -result
    } else if (s[0] == '+') {
        s = s.substring(1, s.length)
        return getResult(s, symbol)
    } else {
        return 0
    }

    function getResult(s, symbol) {
        let result = 0
        if (s[0] >= '0' && s[0] <= '9') {
            let sindex = 0
            while (sindex < s.length) {
                if (s[sindex] < '0' || s[sindex] > '9') {
                    break
                }
                sindex++
            }
            result = parseInt(s.substring(0, sindex))
        }
        if (symbol) {
            if (result > MAX_VAL) {
                result = MAX_VAL
            }
        } else {
            if (-result < MIN_VAL) {
                result = -MIN_VAL
            }
        }
        return result
    }
};