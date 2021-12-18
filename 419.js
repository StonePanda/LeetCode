var countBattleships = function(board) {
    const row = board.length;
    const col = board[0].length;
    let ans = 0;
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (board[i][j] === 'X') {
                board[i][j] = '.';
                for (let k = j + 1; k < col && board[i][k] === 'X'; ++k) {
                    board[i][k] = '.';
                }
                for (let k = i + 1; k < row && board[k][j] === 'X'; ++k) {
                    board[k][j] = '.';
                }
                ans++;
            }
        }
    }
    return ans;
};

// 连题目我都没读懂是什么意思！！

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    // 连题目都没有看懂是什么意思！
    // 看了题解的评论才懂！
    // 意思就是战舰的大小不是一定的，按行和列连在一起的就是新战舰！
    const row = board.length
    const col = board[0].length
    let ans = 0
    for (let i = 0; i < row; i++) {
        // 这个循环里的++i和i++都一样
        for (let j = 0; j < col; ++j) {
            if (board[i][j] === 'X') {
                board[i][j] = '.'
                for (let k = j + 1; k < col && board[i][k] == 'X'; ++k) {
                    board[i][k] = '.'
                }
                for (let k = i + 1; k < row && board[k][j] == 'X'; ++k) {
                    board[k][j] = '.'
                }
                ans++
            }
        }
    }
    return ans
};