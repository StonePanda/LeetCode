/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 感觉有点像背包问题
    // 先试试用背包问题行不行

    // 背包问题不行，不是同一种逻辑！
    // 动规也不行，因为要输出的不是数字！

    // 其实我觉得像背包问题是对的！但是我的回溯思想被for循环限制住了！

    let result = []
    let path = ''

    function backtracking(n, open, close) {
        if (path.length == n * 2) {
            result.push(path.slice())
                // 字符串其实也是数组
            return
        }
        if (open < n) {
            path += '('
            backtracking(n, open + 1, close)
            path = path.slice(0, path.length - 1)
                // 不包括最后一个
        }
        if (close < open) {
            // 在这里为什么不是小于n，因为必须要满足正确的闭合顺序
            path += ')'
            backtracking(n, open, close + 1)
            path = path.slice(0, path.length - 1)
        }
    }
    backtracking(n, 0, 0)
    return result
};