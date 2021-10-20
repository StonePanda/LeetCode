/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    // 动态规划第一步：确定dp数组的意义
    // dp[i]的意义是遍历到root[i]时，偷盗的最高金额为dp[i]
    // 仔细思考，同层之间的元素，是没有直接相连的
    // 那么同层的元素是可以全部选的
    // 有一种感觉，就是选择不同的层
    // 然后相隔层之间不能选择，这就转换成了打家劫舍问题
    // 那么就需要把root转换成nums数组
    // 这就相当于二叉树的广度优先搜索
    let nodes = []
    nodes.push([root])
    while (true) {
        let samelayer = []
        for (let i = 0; i < nodes[nodes.length - 1].length; i++) {
            if (nodes[nodes.length - 1][i].left != null) {
                samelayer.push(nodes[nodes.length - 1][i].left)
            }
            if (nodes[nodes.length - 1][i].right != null) {
                samelayer.push(nodes[nodes.length - 1][i].right)
            }
        }
        if (samelayer.length == 0) {
            break
        } else {
            nodes.push(samelayer)
        }
    }
    let nums = []
    for (let i = 0; i < nodes.length; i++) {
        let sum = 0
        for (let j = 0; j < nodes[i].length; j++) {
            sum += nodes[i][j].val
        }
        nums.push(sum)
    }
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    let dp = Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[dp.length - 1]
};
// 自己是想把它转换成打家劫舍的方法做
// 但是在例子64/124的时候就报错了：
// [2,1,3,null,4]
// 正确答案不是2+4，而是2+4+3
// 所以我把它分层计算的思路是错误的
// 这道题上面我写的就是二叉树的广度搜索
// 教程上说，看到树，首先要想到树的遍历，深度优先搜索的前中后序遍历
// 广度遍历就那一个
// 我之前也是想过这道题要面对的是：这个节点，抢还是不抢
// 但是我没有想出来怎么判断
// 这道题目为什么是后序遍历，其实我在面对树的思考的时候
// 总是习惯，从根向叶子节点思考
// 但是这道题，如果从根向叶子节点思考，最后会有无数个结果，所以这道题，一定是后序遍历
// 也就是从叶子向根思考
// 另外对于二叉树来说，肯定是要用递归的思想，所以这道题是递归+动态规划
// 递归的参数肯定是节点，返回的值其实就是dp数组
// dp数组在这道题里是二维，对一个节点，dp[0]表示不偷这个节点，dp[1]表示偷这个节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    let result = robTree(root)

    function robTree(node) {
        if (node == null) {
            // 这个节点是空的，偷和不偷，最大金额都是0，0
            return [0, 0]
        }
        let left = robTree(node.left)
        let right = robTree(node.right)
            // 偷这个节点
        let val2 = node.val + left[0] + right[0]
            // 不偷这个节点
            // 那么左右节点偷不偷是不知道的，所以选一个较大的
        let val1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
            // console.log([val1,val2])
        return [val1, val2]
    }
    return Math.max(result[0], result[1])
};
// 注意我自己写的时候，把头和不偷的值顺序搞错了！