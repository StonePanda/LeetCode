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
var averageOfLevels = function(root) {
    let result = []
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        let path = 0
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            path += tmp.val
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
        result.push(path / quelen)
    }
    return result
};
// 还是层序遍历的变种问题，但是算的是平均值，不是/2,第一次竟然写错了！