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
var getMinimumDifference = function(root) {
    // 差值是一个正数
    // 感觉需要遍历树
    // root不可能为null，不用考虑
    let nodesVal = []
    let result = Number.MAX_SAFE_INTEGER

    function getPreorder(root) {
        if (root == null) {
            return
        }
        for (let i = 0; i < nodesVal.length; i++) {
            let tmp = Math.abs(nodesVal[i] - root.val)
            if (tmp < result) {
                result = tmp
            }
        }
        nodesVal.push(root.val)
        getPreorder(root.left)
        getPreorder(root.right)
    }
    getPreorder(root)
    return result
};
// 简单题目
// 但是没看到题目中说的是二叉搜索树
// 要把二叉搜索树转成有序数组，就很简单了！