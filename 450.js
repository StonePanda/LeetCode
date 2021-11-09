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
 * @param {number} key
 * @return {TreeNode}
 */
// var deleteNode = function(root, key) {
//     // 节点可能不在
//     // 感觉还是用递归
//     function getRoot(root, key) {
//         if (root == null) {
//             return null
//         }
//         if (root.val == key) {
//             if (root.left == null && root.right == null) {
//                 return null
//             }
//             if (root.left != null) {
//                 root.val = root.left.val
//                 root.left = null
//                 return root
//             }
//             if (root.left == null && root.right != null) {
//                 root.val = root.right.val
//                 root.right = null
//                 return root
//             }
//         }
//         if (root.val > key) {
//             root.left = getRoot(root.left, key)
//         }
//         if (root.val < key) {
//             root.right = getRoot(root.right, key)
//         }
//         return root
//     }
//     return getRoot(root, key)
// };
// 上面这个代码是自己写的第一个代码，在例子59/91的时候就报错了
// [5,3,6,2,4,null,7]
// 5
// 主要是错在找到后删除节点的处理上
// 那就尝试一下变成数组，然后再重新构建？
// 感觉很奇怪！

// 看教程额！
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // 看教程后补充：

    // 节点可能不在
    // 感觉还是用递归
    function getRoot(root, key) {
        if (root == null) {
            return null
        }
        // 主要错在这里的处理上
        if (root.val == key) {
            // 两边都是空，就直接删除了，这个处理是对的
            if (root.left == null && root.right == null) {
                return null
            }
            // 左孩子不为空，右孩子空，也是直接返回左孩子
            if (root.left != null && root.right == null) {
                return root.left
            }
            // 自己对删除的理解也不好
            // 左孩子空，右孩子不空，不用这么麻烦，直接返回右孩子，不就相当于删除了root
            if (root.left == null && root.right != null) {
                return root.right
            }
            // 左右孩子都不为空，就比较复杂
            else {
                // 根据二叉搜索树的有序，要想删除后还是二叉搜索树，那么右子树最左边的就是跟root接的最近，然后把左子树挂在上面完全没问题
                let nodeRight = root.right
                while (nodeRight.left != null) {
                    nodeRight = nodeRight.left
                }
                nodeRight.left = root.left
                root.left = null
                root = root.right
                return root
            }
        }
        if (root.val > key) {
            root.left = getRoot(root.left, key)
        }
        if (root.val < key) {
            root.right = getRoot(root.right, key)
        }
        return root
    }
    return getRoot(root, key)
};