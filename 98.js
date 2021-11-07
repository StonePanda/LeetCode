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
// var isValidBST = function(root) {
//     // 肯定也是递归！有了前面的经验，试试这次递归还会不会出错！
//     function getResult(root) {
//         if (root == null) {
//             return true
//         }
//         if (root.left != null) {
//             if (root.left.val >= root.val) {
//                 return false
//             }
//             let left = getResult(root.left)
//             if (!left) {
//                 return false
//             }
//         }
//         if (root.right != null) {
//             if (root.right.val <= root.val) {
//                 return false
//             }
//             let right = getResult(root.right)
//             if (!right) {
//                 return false
//             }
//         }
//         return true
//     }

//     return getResult(root)
// };

// 这道题在例子72/80的时候就报错了
// 这个是当时想过的例子：
// [5,4,6,null,null,3,7]

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
// var isValidBST = function(root) {
//     // 肯定也是递归！有了前面的经验，试试这次递归还会不会出错！
//     function getResult(root, rootlist) {
//         if (rootlist.length == 0) {
//             return true
//         }
//         if (root == null) {
//             return true
//         }
//         if (root.left != null) {
//             for (let i = 0; i < rootlist.length; i++) {
//                 if (root.left.val >= rootlist[i]) {
//                     return false
//                 }
//             }
//             rootlist.push(root.left.val)
//             let left = getResult(root.left, rootlist)
//             if (!left) {
//                 return false
//             }
//         }
//         if (root.right != null) {
//             for (let i = 0; i < rootlist.length; i++) {
//                 if (root.right.val <= rootlist[i]) {
//                     return false
//                 }
//             }
//             rootlist.push(root.right.val)
//             let right = getResult(root.right, rootlist)
//             if (!right) {
//                 return false
//             }
//         }
//         return true
//     }
//     let rootlist = []
//     if (root != null) {
//         rootlist.push(root.val)
//     }
//     return getResult(root, rootlist)
// };

// 上面这样还是错的
// 看教程，发现就是把root中序遍历一下然后看看是不是递增序列
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
var isValidBST = function(root) {
    // 看教程后的做法
    let result = []

    function getInorder(root) {
        if (root == null) {
            return
        }
        getInorder(root.left)
        result.push(root.val)
        getInorder(root.right)
    }
    getInorder(root)
    for (let i = 1; i < result.length; i++) {
        if (result[i] <= result[i - 1]) {
            return false
        }
    }
    return true
};