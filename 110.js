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
// var isBalanced = function(root) {
//     if (root == null) {
//         return true
//     }
//     let left = root.left
//     let right = root.right
//     let leftheight = 0
//     let rightheight = 0
//     while (left != null) {
//         if (left.left != null) {
//             left = left.left
//         } else {
//             left = left.right
//         }
//         leftheight++
//     }
//     while (right != null) {
//         if (right.right != null) {
//             right = right.right
//         } else {
//             right = right.left
//         }
//         rightheight++
//     }
//     if (Math.abs(rightheight - leftheight) <= 1) {
//         return true
//     }
//     return false
// };
// 上面是自己第一遍写的，但是在例子197/228的时候就报错了
// [1,2,2,3,null,null,3,4,null,null,4]
// 但是看了看题目，发现是每个节点！每个节点的高度差绝对值都不能超过1，对平衡二叉树的理解错了

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
// var isBalanced = function(root) {
//     if (root == null) {
//         return true
//     }
//     let left = root.left
//     let right = root.right
//     if (left == null && right != null) {
//         if (right.left != null || right.right != null) {
//             return false
//         }
//     }
//     if (left != null && right == null) {
//         if (left.left != null || left.right != null) {
//             return false
//         }
//     }
//     if (!isBalanced(left)) {
//         return false
//     }
//     if (!isBalanced(right)) {
//         return false
//     }
//     return true
//         // 注意是每个节点！那感觉这道题目用递归比较合适
//         // 那就是看什么时候isBalanced返回的结果是false
// };
// 然后第二次做吸取了前面的教训，但是还是出错了
// 在示例例子的时候就错了：
// [1,2,2,3,3,null,null,4,4]
// 应该返回false，但我返回了true，因为对于根来说，确实左右子树都是满足的，但是根不满足

// 所以再换一个思路，递归返回高度？

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
var isBalanced = function(root) {
    // 注意是每个节点！那感觉这道题目用递归比较合适
    // 那就是看什么时候isBalanced返回的结果是false
    // 依然用递归，但是递归返回的是高度
    // 都不对！感觉这一题得从叶子向root遍历
    // 而且左右高度我不会求！

    // 看教程了！
    // 用递归，求高度，注意高度和深度的差别，高度是从叶子节点到该节点的最长简单路径边的条数，深度是从根节点到该节点的最长简单路径边的条数
    // 递归三部曲复习：确定递推参数和返回值，确定终止条件，确定单层递归的逻辑
    function getHeight(root) {
        if (root == null) {
            return 0
        }
        let leftheight = getHeight(root.left)
        if (leftheight == -1) {
            return -1
        }
        let rightheight = getHeight(root.right)
        if (rightheight == -1) {
            return -1
        }
        if (Math.abs(leftheight - rightheight) > 1) {
            return -1
        } else {
            return 1 + Math.max(leftheight, rightheight)
        }
    }
    if (getHeight(root) == -1) {
        return false
    }
    return true
};
// 确实递归返回高度，但不是我自己写出来的！！记好这个求高度的递归！这个相当于是从叶子节点开始遍历的