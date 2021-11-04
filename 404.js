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
var sumOfLeftLeaves = function(root) {
    // 是叶子，而且是左叶子，所以还是要遍历，而且是在左叶子的时候记录
    let result = 0

    function getleftLeaves(node) {
        if (node == null) {
            return
        }
        if (node.left != null && node.left.left == null && node.left.right == null) {
            // 这下可以断定是左叶子了
            result += node.left.val
        }
        let left = node.left
        let right = node.right
        getleftLeaves(left)
        getleftLeaves(right)
    }
    getleftLeaves(root)
    return result
};
// 还是递归解决的，但是我总觉得我写递归的时候没有套路，万一之后稍微改变一下
// 就卡壳了，跟着教程走一下
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
var sumOfLeftLeaves = function(root) {
    // 跟着教程走一遍递归
    // 确定递归的参数和返回值
    // 参数肯定是node，返回值就是这个node下的左叶子之和

    // 确定终止条件
    // 肯定还是在root==null的时候终止
    // 这一道题，只是在有左叶子的时候记录，但是不代表左叶子的时候终止

    // 确定单层递归的逻辑
    // 这个递归遍历肯定是后序遍历，因为要在最后遍历到根，求所有的
    // 左叶子之和

    function getLeftSum(node) {
        // 先写终止条件
        if (node == null) {
            return 0
        }

        let leftvalue = getLeftSum(node.left) // 左
        let rightvalue = getLeftSum(node.right) //右
        let midvalue = 0 //中
        if (node.left != null && node.left.left == null && node.left.right == null) {
            midvalue += node.left.val
        }
        return midvalue + leftvalue + rightvalue

    }
    return getLeftSum(root)
};