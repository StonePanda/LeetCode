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
var countNodes = function(root) {
    // 看到的时候比较疑惑，难道不是遍历就能解决嘛？
    // 检索到第一个没有右子树的
    // 然后最后一层叶子加上前面的？
    let que = []
    let result = 0
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        result += quelen
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
// 我就用遍历做的，结果也还过了
// 看了教程，如果不用上面的方法就是用满二叉树的方法，