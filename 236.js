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
// var lowestCommonAncestor = function(root, p, q) {
//     // 感觉肯定是后续遍历
//     // 先把后续遍历写出来
//     let postorder = []
//     let pfind = false
//     let qfind = false

//     function getPostorder(root, p, q) {
//         if (root == null) {
//             return
//         }


//         getPostorder(root.left, p, q)
//         getPostorder(root.right, p, q)
//         if (root.val == p.val) {
//             pfind = true
//         }
//         if (root.val == q.val) {
//             qfind = true
//         }
//         if (pfind && qfind) {
//             return
//         }
//         postorder.push(root.val)
//     }
//     getPostorder(root, p, q)
//     console.log(postorder)
//     return new TreeNode(postorder[0])
// };

// 这一道题只想到了后序遍历，但是后面的就没有思路了
// 而且要返回的必须是节点，不能是数值

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
    // 需要返回的是节点
    // 还是没有思路，看教程了！

    // 看教程会发现，写完的思路很简单！
    if (root == p || root == q || root == null) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left != null && right != null) {
        // left找到了p，right找到了q
        return root
    }

    if (left == null && right != null) {
        // left没有p，q，但是right有
        return right
    }
    if (left != null && right == null) {
        return left
    } else {
        return null
    }
};
// 看了教程后的！！记住！！