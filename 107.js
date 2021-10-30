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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // 自己给想复杂了，其实就按照层序遍历，但是在获得结果的时候不用push，而是用unshift就可以了（添加元素到数组的头部）
    let result = []
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        let path = []
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
        result.unshift(path)
    }
    return result
};
// 这道题刚开始的时候我还在想真的倒叙层序遍历，然后push进result里，脑子怎么回事！