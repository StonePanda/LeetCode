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
// var connect = function(root) {
//     // 这个其实没太懂什么意思？
//     // 完美二叉树就是满二叉树，就是除了叶子节点，所有的节点都是有两个孩子
//     let result = []
//     let que = []
//     if (root != null) {
//         que.push(root)
//     }
//     while (que.length != 0) {
//         let quelen = que.length
//         for (let i = 0; i < quelen; i++) {
//             let tmp = que.shift()
//             if (i == quelen - 1) {
//                 result.push(tmp.val)
//                 result.push('#')
//                 tmp.next = null
//             } else {
//                 result.push(tmp.val)
//                 tmp.next = que[0]
//             }
//             if (tmp.left != null) {
//                 que.push(tmp.left)
//                 que.push(tmp.right)
//             }
//         }
//     }
//     console.log(result)
//     return result
// };

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
    // 这个其实没太懂什么意思？
    // 完美二叉树就是满二叉树，就是除了叶子节点，所有的节点都是有两个孩子
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
                que.push(tmp.right)
            }
        }
    }
    return root
};
// 这个确实是看了教程后才懂，原来让返回的是root，不是result