/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 复习一下昨天普通二叉树的最近公共祖先
    if (root == p || root == q || root == null) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left != null && right != null) {
        return root
    }
    if (left == null && right != null) {
        return right
    }
    if (left != null && right == null) {
        return left
    }
    if (left == null && right == null) {
        return null
    }
};
// 这个是普通二叉树的最近公共祖先

// 下面是看教程后
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 和普通二叉树的不同点是：二叉搜索树有序
    // 那么公共祖先，一定在p和q之间
    function getResult(root, p, q) {
        // 递归终止条件
        if (root == null) {
            return
        }
        // p和q都在其左子树
        if (p.val < root.val && q.val < root.val) {
            return getResult(root.left, p, q)
        }
        // p和q都在右子树
        if (p.val > root.val && q.val > root.val) {
            return getResult(root.right, p, q)
        }
        // 不管是有相等的，还是一个在左子树一个在右子树
        return root
    }
    return getResult(root, p, q)
};