/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var rightSideView = function(root) {
//     let result = []
//     let que = []
//     if (root != null) {
//         que.push(root)
//     }
//     while (que.length != 0) {
//         let tmp = que.shift()
//         result.push(tmp.val)
//         if (tmp.right != null) {
//             que.push(tmp.right)
//         } else if (tmp.left != null) {
//             que.push(tmp.left)
//         }
//     }
//     return result
// };
// 上面的代码是自己想当然的第一遍代码
// 在例子157/215的时候就报错了：
// [1,2,3,4]
// 应该输出[1,3,4]，但是我输出的是[1,3]

// 所以我突然想起来这道题还可以用层序遍历做，但是要的结果是每一层的最后一个
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
var rightSideView = function(root) {
    // 在第一遍错误之后，选择用层序遍历，然后取每一层的最后一个
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
        if (path.length != 0) {
            result.push(path[path.length - 1])
        }
    }
    return result
};
// 这样看还是层序遍历的变种嘛~