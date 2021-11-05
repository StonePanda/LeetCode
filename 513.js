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
var findBottomLeftValue = function(root) {
    // 这道题感觉用层序遍历更好
    let que = []
    let result = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let path = []
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            path.push(tmp.val)
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
        result.push(path)
    }
    return result[result.length - 1][0]
};
// 感觉应该也可以用其他遍历方式