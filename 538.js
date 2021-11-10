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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    // 感觉是遍历方向从最右边的叶子逐步往上
    // 搞不赢！没思路！
    // 看教程了！

    // 看教程发现，其实是反中序遍历，也就是右中左遍历
    // 同时需要记录，前一个处理过的节点值，然后才能顺利的累加
    // 比如右中左 中 左，对于右子树，最后处理的是左
    // 中需要累加前一个左值！
    // 处理的前一个的值
    let prevalue = 0

    function getRoot(root) {
        if (root == null) {
            return null
        }
        getRoot(root.right)
        root.val += prevalue
        prevalue = root.val
        getRoot(root.left)
        return root
    }
    return getRoot(root)
};
// 这一道题做的模模糊糊的！