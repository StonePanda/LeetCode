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
// var searchBST = function(root, val) {
//     // 感觉还是递归呢？

//     // 发现这道题没有说节点有没有重复

//     function getTree(root, val) {
//         if (root == null) {
//             return null
//         }
//         if (root.val == val) {
//             return root
//         }
//         if (root.left != null) {
//             return getTree(root.left, val)
//         }
//         if (root.right != null) {
//             return getTree(root.right, val)
//         }
//         return null
//     }
//     return getTree(root, val)
// };

// 上面这个递归在例子17/36的时候就报错了
// 其实是我自己不太知道什么时候返回，什么时候不返回

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
// var searchBST = function(root, val) {
//     // 感觉还是递归呢？

//     // 发现这道题没有说节点有没有重复

//     function getTree(root, val) {
//         if (root == null) {
//             return null
//         }
//         if (root.val == val) {
//             return root
//         }
//         if (root.left != null) {
//             if (getTree(root.left, val) != null) {
//                 return getTree(root.left, val)
//             }
//         }
//         if (root.right != null) {
//             if (getTree(root.right, val) != null) {
//                 return getTree(root.right, val)
//             }
//         }
//         return null
//     }
//     return getTree(root, val)
// };

// 然后第二遍这样写超时间限制了！
// 在测试例子30/36的时候超出时间限制了

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
var searchBST = function(root, val) {
    // 感觉还是递归呢？

    // 发现这道题没有说节点有没有重复

    function getTree(root, val) {
        if (root == null) {
            return null
        }
        if (root.val == val) {
            return root
        }
        if (root.left != null) {
            let left = getTree(root.left, val)
            if (left != null) {
                return left
            }
        }
        if (root.right != null) {
            let right = getTree(root.right, val)
            if (right != null) {
                return right
            }
        }
        return null
    }
    return getTree(root, val)
};
// 然后我自己改成上面这个样子！其实也想到了上一个会超出时间！因为没必要跑两次递归！