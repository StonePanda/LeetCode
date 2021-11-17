/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 将字符串转变为数组，然后利用数组的reverse函数
    // 第一遍写之后错误了！因为自己没有看到如果超出32位的整数范围的话，就返回0
    let shuzu = x.toString().split('')
    let MAX_VAL = Math.pow(2, 31) - 1
    let MIN_VAL = -Math.pow(2, 31)
    if (shuzu[0] != '-') {
        let result = parseInt(shuzu.reverse().join(''))
        if (result > MAX_VAL || result < MIN_VAL) {
            return 0
        }
        return result
    } else {
        let result = parseInt('-' + shuzu.slice(1, shuzu.length).reverse().join(''))
        if (result > MAX_VAL || result < MIN_VAL) {
            return 0
        }
        return result
    }
};