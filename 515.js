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
 * @return {number[]}
 */
var largestValues = function(root) {
    let result = []
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let path = Number.MIN_SAFE_INTEGER
            // 要记好这个哦！不要随便用0或者其他定值什么的！
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (tmp.val > path) {
                path = tmp.val
            }
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
        result.push(path)
    }
    return result
};
// 这个还是层序遍历