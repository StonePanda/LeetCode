/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
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
            if (tmp.children.length != 0) {
                que = que.concat(tmp.children)
            }
        }
    }
    return result
};
// 还是简单题目，层序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 之前做过的题目，再来做一遍
    // 层序遍历
    let que = []
    let result = 0
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        result++
        let len = que.length
        for (let i = 0; i < len; i++) {
            let tmp = que.shift()
            if (tmp.children.length != 0) {
                que = que.concat(tmp.children)
            }
        }
    }
    return result
};
// 每日一题，我和上次做的竟然一模一样！