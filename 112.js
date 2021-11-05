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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 感觉这道题和动规里面的背包问题有点像，但是和回溯又有点像
    // 但是第一感觉还是回溯，因为背包那个物体其实和树节点不太一样
    let result = 0
    let equalflag = false
    if (root == null) {
        return equalflag
    }
    result += root.val

    function getSum(node, targetSum) {
        if (node == null) {
            // 其实我做回溯的时候也总是遇到一个误区，那就是因为递归了很多层，我以为的return并没有返回到第一层返回结果里，只能层层往上的传递
            return
        }
        if (node.left == null && node.right == null) {
            // 叶子节点
            if (result == targetSum) {
                equalflag = true
            }
        }
        let nodechildren = [node.left, node.right]
        for (let i = 0; i < nodechildren.length; i++) {
            if (nodechildren[i] == null) {
                continue
            }
            result += nodechildren[i].val
            getSum(nodechildren[i], targetSum)
            result -= nodechildren[i].val
        }
    }
    getSum(root, targetSum)
    if (equalflag) {
        return true
    }
    return false
};
// 回溯算法