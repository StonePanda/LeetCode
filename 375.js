/**
 * @param {number} n
 * @return {number}
 */
// var getMoneyAmount = function(n) {
//     // 看起来是要构造一个二叉搜索树呢
//     // 构造二叉搜索树，然后查找到叶子节点的最大路径

//     // 构造二叉搜索树
//     // 有一次出现问题了，所以我觉得可能是要构造高度平衡二叉搜索树
//     let nums = []
//     for (let i = 1; i <= n; i++) {
//         nums.push(i)
//     }

//     function getTree(start, end) {
//         if (start > end) {
//             return null
//         }
//         let median = (start + end) / 2 | 0
//         let root = new TreeNode(nums[median])
//         root.right = getTree(median + 1, end)
//         root.left = getTree(start, median - 1)
//         return root
//     }

//     let root = getTree(0, n - 1)
//         // 获取root后，获得访问叶子节点的最大路径，感觉需要回溯
//     console.log(root)
//     let result = 0
//     let path = root.val

//     function getResult(root) {
//         if (root == null) {
//             return
//         }
//         if (root.left == null && root.right == null) {
//             console.log(result, path, root.val)
//                 // 是叶子节点，需要比较值
//             if (result < path - root.val) {
//                 result = path - root.val
//             }
//         }
//         // 不是叶子节点
//         let children = [root.left, root.right]
//         for (let i = 0; i < children.length; i++) {
//             if (children[i] == null) {
//                 continue
//             }
//             path += children[i].val
//             getResult(children[i])
//             path -= children[i].val
//         }
//     }
//     getResult(root)
//     return result
//         // 但是还是不对
//         // 放弃了，看题解
// };
// 题解里面还是用的动态规划

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    // 题解使用动态规划做的，我被二叉树冲昏头脑了
    // 好烦！我觉得自己的状态好差劲！
    // 或需要更换一下每天的第一件事是做什么了！

    // 使用动态规划做
    // 第一步定义dp数组的含义，dp[j]表示获胜的最小现金数
    // 加入我随便猜了一个k，那么dp[j]=k+Math.max(dp(k),)
    // 如果是比k大的情况，写不出递推公式
    // 如果是二维数组
    // dp[i][j]表示i到j之间的所需的最小现金数
    // 那么dp[1][n]=k+Math.max(dp[1][k],dp[k+1][n])
    // k的范围从1到n都有可能
    // 但是当k==n的时候，直接说n，猜对了，花费为0，不再考虑
    // 所以k从1到n-1

    // 递推公式，dp[i][j]=k+Math.max(dp[i][k-1],dp[k+1][j])
    // 那么循环方向是，k肯定是从1到n-1，i是从n-1到1的
    // j是从1到n的

    // 对于初始化，i<j,i>=j的时候，花销都是0
    // 如果j-i==1,那么dp[i][j],那么最小现金数应该是i

    let dp = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {

            if (i < j) {
                if (j - i == 1) {
                    dp[i][j] = i
                } else {
                    let maxCost = Number.MAX_SAFE_INTEGER
                    for (let k = i; k <= j - 1; k++) {
                        let cost = k + Math.max(dp[i][k - 1], dp[k + 1][j])
                            // 这里应该是最小的！！！
                        maxCost = Math.min(cost, maxCost)
                    }
                    dp[i][j] = maxCost
                }

            }
        }
    }
    return dp[1][n]
};