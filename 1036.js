/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
    if (blocked.length == 0) {
        return true
    }
    // 每个方格有四个方向可以选，上下左右，感觉可以用回溯法
    let path = []
    let next = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0]
        ]
        // 上下左右
    function backtracking(blocked, source, target) {
        if (path.length != 0 && path[path.length - 1][0] == target[0] && path[path.length - 1][1] == target[1]) {
            // js的数组不能这样比较a==b,可以视情况用a.tostring()==b.tostring()
            // 到达了
            return true
        } else if (path.length != 0 && (blocked.includes(path[path.length - 1] || source))) {
            // includes,这里当然也不行了！
            // 这条路行不通
            return false
        }
        for (let i = 0; i < next.length; i++) {
            console.log(source)
            if (source[0] + next[i][0] < 0 || source[1] + next[i][1] < 0) {
                continue
            }
            path.push([source[0] + next[i][0], source[1] + next[i][1]])
            backtracking([source[0] + next[i][0], source[1] + next[i][1]], target)
            path.pop()
        }
        // 上下左右四个都循环完了，但是还没有返回？
        return false
            // 但是感觉不对呢！这样肯定要超时的吧！
    }
    return backtracking(blocked, source, target)
};
// 上面是自己的错误思路

// 下面是官方题解
// 在包围圈中
const BLOCKED = -1;
// 不在包围圈中
const VALID = 0;
// 无论在不在包围圈中，但在 n(n-1)/2 步搜索的过程中经过了 target
const FOUND = 1;

const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];
const BOUNDARY = 1000000;

var isEscapePossible = function(blocked, source, target) {
    if (blocked.length < 2) {
        return true;
    }

    const hashBlocked = new Set();
    for (const pos of blocked) {
        hashBlocked.add([pos[0], pos[1]].toString());
    }

    let result = check(blocked, source, target, hashBlocked);
    if (result === FOUND) {
        return true;
    } else if (result === BLOCKED) {
        return false;
    } else {
        result = check(blocked, target, source, hashBlocked);
        return result !== BLOCKED;
    }
};

const check = (blocked, start, finish, hashBlocked) => {
    const sx = start[0],
        sy = start[1];
    const fx = finish[0],
        fy = finish[1];
    let countdown = Math.floor(blocked.length * (blocked.length - 1) / 2);
    const startPair = [sx, sy];
    const queue = [];
    queue.push(startPair);
    const visited = new Set();
    visited.add(startPair.toString());
    while (queue.length && countdown > 0) {
        const [x, y] = queue.shift();
        for (let d = 0; d < 4; ++d) {
            const nx = x + dirs[d][0],
                ny = y + dirs[d][1];
            const newPair = [nx, ny];
            if (nx >= 0 && nx < BOUNDARY && ny >= 0 && ny < BOUNDARY && !hashBlocked.has(newPair.toString()) && !visited.has(newPair.toString())) {
                if (nx === fx && ny === fy) {
                    return FOUND;
                }
                --countdown;
                queue.push(newPair);
                visited.add(newPair.toString());
            }
        }
    }
    if (countdown > 0) {
        return BLOCKED;
    }
    return VALID;
};
// 反正就是官方题解那样！我怎么看不进去题目啊！！