/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    // 先写出来数字的英文表示
    let numsinE = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let result = []
    while (s.indexOf('z') != -1) {
        result.push(0)
        s = s.replace('z', '')
        s = s.replace('e', '')
        s = s.replace('r', '')
        s = s.replace('o', '')
    }
    while (s.indexOf('w') != -1) {
        result.push(2)
        s = s.replace('t', '')
        s = s.replace('w', '')
        s = s.replace('o', '')
    }
    while (s.indexOf('u') != -1) {
        result.push(4)
        s = s.replace('f', '')
        s = s.replace('o', '')
        s = s.replace('u', '')
        s = s.replace('r', '')
    }
    while (s.indexOf('x') != -1) {
        result.push(6)
        s = s.replace('s', '')
        s = s.replace('i', '')
        s = s.replace('x', '')
    }
    while (s.indexOf('g') != -1) {
        result.push(8)
        s = s.replace('e', '')
        s = s.replace('i', '')
        s = s.replace('g', '')
        s = s.replace('h', '')
        s = s.replace('t', '')
    }
    // 剩下的不就是解一个五元方程组
    // 但是剩下的发现，o可以直接确认一个one的数目
    while (s.indexOf('o') != -1) {
        result.push(1)
        s = s.replace('o', '')
        s = s.replace('n', '')
        s = s.replace('e', '')
    }
    while (s.indexOf('s') != -1) {
        result.push(7)
        s = s.replace('s', '')
        s = s.replace('e', '')
        s = s.replace('v', '')
        s = s.replace('e', '')
        s = s.replace('n', '')
    }
    while (s.indexOf('n') != -1) {
        result.push(9)
        s = s.replace('n', '')
        s = s.replace('i', '')
        s = s.replace('n', '')
        s = s.replace('e', '')
    }
    while (s.indexOf('f') != -1) {
        result.push(5)
        s = s.replace('f', '')
        s = s.replace('i', '')
        s = s.replace('v', '')
        s = s.replace('e', '')
    }
    while (s.length != 0) {
        result.push(3)
        s = s.replace('t', '')
        s = s.replace('h', '')
        s = s.replace('r', '')
        s = s.replace('e', '')
        s = s.replace('e', '')
    }
    result.sort((a, b) => a - b)
    return result.join('')
};
// 看了看题解也是这个思路，但是使用get而不是replace