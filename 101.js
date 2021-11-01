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
//  * @return {boolean}
//  */
// var isSymmetric = function(root) {
//     // 要判断是否是镜像对称，就是每一层是否是镜像对称！
//     let que = []
//     if (root == null) {
//         return true
//     }
//     que.push(root)
//     while (que.length != 0) {
//         let quelen = que.length
//         let path = []
//         for (let i = 0; i < quelen; i++) {
//             let tmp = que.shift()
//             if (tmp == null) {
//                 path.push(0)
//             } else {
//                 que.push(tmp.left)
//                 que.push(tmp.right)
//                 path.push(tmp.val)
//             }
//         }
//         // 因为这里我其实对镜像对称的定义不是特别清楚，所以先按照，如果是奇数就算不对称吧
//         if (path.length != 1 && path.length % 2 == 1) {
//             return false
//         } else if (path.length > 1 && path.length % 2 == 0) {
//             for (let i = 0; i < path.length / 2; i++) {
//                 if (path[i] != path[path.length - 1 - i]) {
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// };
// 镜像对称的定义刚开始做都还不清楚，但其实就是要枝叶都对称
// 但是上面的题目我还是一遍没有通过，在例子196/197那里报错了
// [1,0]
// 后面那个也被我push成0了，这是不对的，就应该直接push为null
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 要判断是否是镜像对称，就是每一层是否是镜像对称！
    let que = []
    if (root == null) {
        return true
    }
    que.push(root)
    while (que.length != 0) {
        let quelen = que.length
        let path = []
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (tmp == null) {
                path.push(null)
            } else {
                que.push(tmp.left)
                que.push(tmp.right)
                path.push(tmp.val)
            }
        }
        // 因为这里我其实对镜像对称的定义不是特别清楚，所以先按照，如果是奇数就算不对称吧
        if (path.length != 1 && path.length % 2 == 1) {
            return false
        } else if (path.length > 1 && path.length % 2 == 0) {
            for (let i = 0; i < path.length / 2; i++) {
                if (path[i] != path[path.length - 1 - i]) {
                    return false
                }
            }
        }
    }
    return true
};
// 不要随意指定实值，还要说多少遍！！！