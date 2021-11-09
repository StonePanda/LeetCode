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
 * @param {number} val
 * @return {TreeNode}
 */
// var insertIntoBST = function(root, val) {
//     // 看题目前先写下二叉搜索树的特点：有序
//     // 其实有一种方法是先遍历成数组，然后再构造一个二叉搜索树
//     // 但是更直观的方法是，我将插入的元素逐个比较，找到null位置，插入
//     function insertNode(root, val) {
//         if (root == null) {
//             return root
//         }
//         // val应该插在左子树
//         if (root.val > val) {
//             if (root.left == null) {
//                 root.left = new TreeNode(val)
//             } else {
//                 insertNode(root.left, val)
//             }
//         }
//         if (root.val < val) {
//             if (root.right == null) {
//                 root.right = new TreeNode(val)
//             } else {
//                 insertNode(root.right, val)
//             }
//         }
//     }
//     // 注意要返回的是整个的root，而不是插入的那个节点的root
//     insertNode(root, val)
//     return root
//         // return 
// };
// 上面的代码是错的，错在对于空树的处理上，如果是空树，应该直接把这个作为节点的哇！

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // 看题目前先写下二叉搜索树的特点：有序
    // 其实有一种方法是先遍历成数组，然后再构造一个二叉搜索树
    // 但是更直观的方法是，我将插入的元素逐个比较，找到null位置，插入
    function insertNode(root, val) {
        if (root == null) {
            // console.log('会到这一步么') 不会
            return
        }
        // val应该插在左子树
        if (root.val > val) {
            if (root.left == null) {
                root.left = new TreeNode(val)
            } else {
                insertNode(root.left, val)
            }
        }
        if (root.val < val) {
            if (root.right == null) {
                root.right = new TreeNode(val)
            } else {
                insertNode(root.right, val)
            }
        }
    }
    // 注意要返回的是整个的root，而不是插入的那个节点的root
    if (root == null) {
        return new TreeNode(val)
    }
    insertNode(root, val)
    return root
        // return 
};
// 上面的是自己写的，但是教程上也有这种思路

// 下面是看了教程后有一种更简洁的写法
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // 但其实看了教程后发现有一种代码更为简洁的方法
    if (root == null) {
        let node = new TreeNode(val)
        return node
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};