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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    // 这个其实还是类似于删除二叉树
    function getResult(root, low, high) {
        if (root == null) {
            return root
        }
        if (root.val < low || root.val > high) {
            if (root.left == null && root.right == null) {
                root = null
                return root
            }
            if (root.left != null && root.right == null) {
                root = getResult(root.left, low, high)
                return root
            }
            if (root.left == null && root.right != null) {
                root = getResult(root.right, low, high)
                return root
            } else {
                // 右子树最左的叶子
                let nodeLeft = root.right
                while (nodeLeft.left != null) {
                    nodeLeft = nodeLeft.left
                }
                nodeLeft.left = root.left
                root = getResult(root.right, low, high)
                return root
            }
        } else {
            root.left = getResult(root.left, low, high)
            root.right = getResult(root.right, low, high)
            return root
        }
    }
    return getResult(root, low, high)
};
// 其实就是删除节点