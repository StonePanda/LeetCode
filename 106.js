/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 中序遍历 左 中 右 
    // 后序遍历 左 右 中
    // 传进来的两个参数都是数组

    // 可以根据后序遍历确定整个树的根
    // 但是其他的就没有什么思路，直接看教程

    // 之前想到了用根去在中序中切割，但是想到了重复元素
    // 没有注意到题目中专门说了树中没有重复的元素

    // 然后看了教程后的思路：
    // 1.根据后序遍历的最后一个字符去切割中序遍历
    // 2.中序遍历被切割为左子树和右子树
    // 3.然后根据左序被切割后切割后序数组
    // 4.递归处理左区间和右区间

    // 首先肯定知道是递归的

    function getTree(inorder, postorder) {
        if (postorder.length == 0) {
            // 空数组
            return null
        }

        // 后序遍历的最后一个肯定是root
        let root = new TreeNode(postorder[postorder.length - 1])

        if (postorder.length == 1) {
            return root
        }

        // 寻找切割点
        let delimiterIndex = 0
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] == root.val) {
                delimiterIndex = i
                break
            }
        }

        // slice包含起始点，不包含终止点
        root.left = getTree(inorder.slice(0, delimiterIndex), postorder.slice(0, delimiterIndex))
        root.right = getTree(inorder.slice(delimiterIndex + 1, inorder.length), postorder.slice(delimiterIndex, postorder.length - 1))

        return root
    }

    return getTree(inorder, postorder)
};

// 记住这个套路吧！