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
var levelOrder = function(root) {
    // 什么算法？肯定是递归算法
    // 但是就好像没有递归的固定模式？自己摸索一个算法吧:
    let result = []
    if (root == null) {
        return result
    }
    let roots = [root]
    let tmp = []
    let nextlevel = []
    while (roots.length != 0) {
        tmp = []
        nextlevel = []
        for (let i = 0; i < roots.length; i++) {
            if (roots[i] != null) {
                tmp.push(roots[i].val)
            }
            if (roots[i].left != null) {
                nextlevel.push(roots[i].left)
            }
            if (roots[i].right != null) {
                nextlevel.push(roots[i].right)
            }
        }
        result.push(tmp)
        roots = nextlevel
    }
    return result
};
// 这个是自己想的，但是特殊情况root为null没有考虑！


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
var levelOrder = function(root) {
    // 什么算法？肯定是递归算法
    // 但是就好像没有递归的固定模式？自己摸索一个算法吧:


    // 看完教程后觉得代码确实有优化的空间，而且层序遍历可能之后还会经常遇到，所以就跟着教程又写一遍
    let que = []
    if (root != null) {
        que.push(root)
    }
    let result = []
    while (que.length != 0) {
        let quelen = que.length
            // 这里必须要用定值的原因，是后面for循环用，但是我又要一直删除que
        let path = []
        for (let i = 0; i < quelen; i++) {
            let quefirst = que.shift()
            path.push(quefirst.val)
            if (quefirst.left != null) {
                que.push(quefirst.left)
            }
            if (quefirst.right != null) {
                que.push(quefirst.right)
            }
        }
        result.push(path)
    }
    return result
};

// 看教程后写的，思路是一样的，但是更清晰了！