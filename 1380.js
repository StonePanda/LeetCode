var luckyNumbers = function(matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
    const maxCol = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            minRow[i] = Math.min(minRow[i], matrix[i][j]);
            maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
        }
    }
    const ret = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
                ret.push(matrix[i][j]);
            }
        }
    }
    return ret;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/solution/ju-zhen-zhong-de-xing-yun-shu-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。