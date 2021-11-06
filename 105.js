/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 前序遍历 中 左 右
    // 中序遍历 左 中 右
    // 其实这道题和前面那道题是一样的

    function getTree(preorder, inorder) {
        if (preorder.length == 0) {
            return null
        }
        let root = new TreeNode(preorder[0])
        if (preorder.length == 1) {
            return root
        }

        let delimitIndex = 0
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] == root.val) {
                delimitIndex = i
                break
            }
        }

        root.left = getTree(preorder.slice(1, delimitIndex + 1), inorder.slice(0, delimitIndex))
        root.right = getTree(preorder.slice(delimitIndex + 1, preorder.length), inorder.slice(delimitIndex + 1, inorder.length))
        return root
    }
    return getTree(preorder, inorder)
};