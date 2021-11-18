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
 * @return {number}
 */
var findTilt = function(root) {
    // 怎么遍历，最先更改的肯定root，从上往下的更改，但是算和的话，肯定是从下往上的算a
    // root的值不能变成数组，变成数组直接就NAN了
    let result = 0

    function getRoot(root) {
        // 感觉需要改变的是val值，把他变成数组
        // val值变成，[this.val,leftSum,RightSum]
        if (root == null) {
            return root
        }
        if (root.left == null && root.right == null) {
            return root
        }
        if (root.left != null && root.right == null) {
            root.left = getRoot(root.left)
            result += Math.abs(root.left.val)
            root.val = root.val + root.left.val
            return root
        }
        if (root.left == null && root.right != null) {
            root.right = getRoot(root.right)
            result += Math.abs(root.right.val)
            root.val = root.val + root.right.val
            return root
        }
        if (root.left != null && root.right != null) {
            root.left = getRoot(root.left)
            root.right = getRoot(root.right)
            result += Math.abs(root.left.val - root.right.val)
            root.val = root.val + root.right.val + root.left.val
            return root
        }
    }
    getRoot(root)
    return result
};