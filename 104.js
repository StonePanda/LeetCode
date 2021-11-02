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
var maxDepth = function(root) {
    let que = []
    let result = 0
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        result++
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
    }
    return result
};
// 简单题目，还是层序遍历