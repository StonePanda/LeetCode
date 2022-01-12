/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 不需要管是不是有解，只需要看给的示例有没有出错，不符合规则
    // 先看行有没有出错
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == '.') {
                continue
            }
            if (board[i].indexOf(board[i][j]) != j) {
                // indexOf函数返回首次出现的次数
                return false
            }
        }
    }
    // console.log()
    // 再看列有没有出错
    for (let j = 0; j < board[0].length; j++) {
        let col = []
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] == '.') {
                continue
            }
            if (col.indexOf(board[i][j]) != -1) {
                return false
            }
            col.push(board[i][j])
        }
    }
    // 再看方块有没有出错
    // i的方位是0-3，3-6，6-9，j的范围是0-3，3-6，6-9
    // 当i=0,的时候，j从0循环到3，或3到6，或6到9
    let stack = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '.') {
                continue
            }

        }
    }
    return true
};
// 反正自己后面那个九宫格内判断的怎么就总是记不住怎么写呢！
// 然后一看官方题解写的那么简单！日哦！

var isValidSudoku = function(board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== '.') {
                const index = c.charCodeAt() - '0'.charCodeAt() - 1;
                rows[i][index]++;
                columns[j][index]++;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false;
                }
            }
        }
    }
    return true;
};

// 看官方题解后自己写的！
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 不需要管是不是有解，只需要看给的示例有没有出错，不符合规则
    // 先看行有没有出错
    // 看了看答案发现答案写的好简单哦！
    // 就是一次遍历就能解决的事情，要记住哦！
    // 因为记录的数组是二维和三维的，这样就不用来回把自己绕晕了
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j]
            if (c !== '.') {
                const index = c.charCodeAt() - '0'.charCodeAt() - 1
                rows[i][index]++
                    columns[j][index]++
                    subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++
                    if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                        return false
                    }
            }
        }
    }
    return true
};