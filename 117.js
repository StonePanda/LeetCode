/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // 其实和昨天那个相比，还是个层序遍历问题
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (i == quelen - 1) {
                tmp.next = null
            } else {
                tmp.next = que[0]
            }
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
    }
    return root
};
// 没什么好说的，和昨天的比起来，不过是二叉树有变化，但是对层序遍历来说，方法都是一样的