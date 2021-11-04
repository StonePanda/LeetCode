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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // 这一道题，首先知道循环或者递归的停止条件肯定是左右子节点都是null
    // 感觉还是从叶子节点遍历到根节点的，那还是用递推吧
    // 为啥感觉更像回溯！！
    let result = []
    if (root == null) {
        return result
    }
    let path = [root.val]

    function getPath(node) {
        if (node == null) {
            return
        }
        if (node.left == null && node.right == null) {
            if (path.length != 0) {
                result.push(path.slice().join('->'))
            }
            return
        }
        let nodechild = [node.left, node.right]
        for (let i = 0; i < 2; i++) {
            if (nodechild[i] == null) {
                continue
            }
            path.push(nodechild[i].val)
            getPath(nodechild[i])
            path.pop()
        }
    }
    getPath(root)
    return result
}

// 确实自己用回溯做出来了，做的思路就是之前写回溯算法的思路
//但是是跑了好几次才做出来的！