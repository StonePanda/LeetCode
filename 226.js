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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 反转二叉树
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let tmp = que.shift()
            // 先声明
        if (tmp.left != null) {
            que.push(tmp.left)
        }
        if (tmp.right != null) {
            que.push(tmp.right)
        }
        let tmpleft = tmp.left
        tmp.left = tmp.right
        tmp.right = tmpleft
    }
    return root
};
// 我刚开始在赋值那里搞错了，先声明了一个变量let left=TreeNode()
// 像这样子搞也可以，但是要用let left = new TreeNode()