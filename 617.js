/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 感觉还是递归，同步遍历两个树
    function getTree(root1, root2) {
        let root
        if (root1 == null && root2 == null) {
            root = null
            return root
        }
        if (root1 == null && root2 != null) {
            root = new TreeNode(root2.val)
            root.left = getTree(null, root2.left)
            root.right = getTree(null, root2.right)
        }
        if (root1 != null && root2 == null) {
            root = new TreeNode(root1.val)
            root.left = getTree(root1.left, null)
            root.right = getTree(root1.right, null)
        }
        if (root1 != null && root2 != null) {
            root = new TreeNode(root1.val + root2.val)
            root.left = getTree(root1.left, root2.left)
            root.right = getTree(root1.right, root2.right)
        }


        return root
    }
    return getTree(root1, root2)
};

// 这道题确实比较简单