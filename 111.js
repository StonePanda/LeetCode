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
var minDepth = function(root) {
    // 也就是找到第一个叶子节点
    let que = []
    let result = 0
    let leef = false
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        result++
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (tmp.left == null && tmp.right == null) {
                leef = true
                break
            }
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
        if (leef) {
            break
        }
    }
    return result
};
// 还是简单题目，依然是层序遍历的变种