/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    // 先获取分别从竖直方向和水平方向上看到的数组
    let up = []
    let left = []
    let tmpjMax = grid[0][0]
    for (let j = 0; j < grid[0].length; j++) {
        tmpjMax = grid[0][j]
        for (let i = 0; i < grid.length; i++) {
            if (j == 0) {
                // console.log(grid[i])
                left.push(Math.max(...grid[i]))
                    // 这里需要展开，因为max接受的参数是一组数，不是一个数组！
            }
            if (grid[i][j] > tmpjMax) {
                tmpjMax = grid[i][j]
            }
        }
        up.push(tmpjMax)
    }
    // console.log(left)
    let total = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            total += Math.min(left[i], up[j]) - grid[i][j]
        }
    }
    return total
};