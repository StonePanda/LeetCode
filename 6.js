/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 这个本来是昨天应该做的题目，今天补上
    // 我们还是按照模拟去做
    // 看成一个二维矩阵，每numRows的字母个数是2*numRows+numsRows-2=3*numRows-2
    // 那么列数就是Math.ceil(s.length/(3*numRows-2))*numRows
    // 列数不一定是上面那个数值，但是一定是小于等于上面那个数值的
    if (numRows == 1) {
        return s
    }
    let shuzu = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        shuzu[i] = new Array(Math.ceil(Math.abs(s.length - numRows) / (2 * numRows - 2)) * (numRows - 1) + 1).fill(" ")
    }
    let sindex = 0
    for (let j = 0; j < shuzu[0].length; j++) {
        for (let i = 0; i < shuzu.length; i++) {
            if (j == 0 || j % (numRows - 1) == 0) {
                if (sindex < s.length) {
                    shuzu[i][j] = s[sindex]
                    sindex++
                }
            } else if (i == numRows - 1 - j % (numRows - 1)) {
                if (sindex < s.length) {
                    shuzu[i][j] = s[sindex]
                    sindex++
                }
            }
        }
    }
    console.log(shuzu)
    let result = ""
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < shuzu[0].length; j++) {
            if (shuzu[i][j] != " ") {
                result += shuzu[i][j]
            }
        }
    }
    return result
};
// 自己做的，竟然也通过了！