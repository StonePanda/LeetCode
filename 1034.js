var colorBorder = function(grid, row, col, color) {
    const m = grid.length,
        n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const borders = [];
    const originalColor = grid[row][col];
    visited[row][col] = true;
    dfs(grid, row, col, visited, borders, originalColor);
    for (let i = 0; i < borders.length; i++) {
        const x = borders[i][0],
            y = borders[i][1];
        grid[x][y] = color;
    }
    return grid;
};

const dfs = (grid, x, y, visited, borders, originalColor) => {
    const m = grid.length,
        n = grid[0].length;
    let isBorder = false;
    const direc = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    for (let i = 0; i < 4; i++) {
        const nx = direc[i][0] + x,
            ny = direc[i][1] + y;
        if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
            isBorder = true;
        } else if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            dfs(grid, nx, ny, visited, borders, originalColor);
        }
    }
    if (isBorder) {
        borders.push([x, y]);
    }
}

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/coloring-a-border/solution/bian-kuang-zhao-se-by-leetcode-solution-0h5l/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 最近几天就是不想学习！！