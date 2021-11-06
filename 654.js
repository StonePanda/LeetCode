/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    // 二叉树的根是数组nums的最大元素
    // 左子树是最大值左边部分 递归出来的最大二叉树
    // 右子树是最大值右边部分 递归出来的最大二叉树

    function getTree(nums) {
        if (nums.length == 0) {
            return null
        }

        let root = new TreeNode(Math.max(...nums))
            // console.log(Math.max(nums))
            // 上面这样写是错误的，获取数组最大值应该加三个点

        if (nums.length == 1) {
            return root
        }

        let maxIndex = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == root.val) {
                maxIndex = i
                break
            }
        }

        root.left = getTree(nums.slice(0, maxIndex))
        root.right = getTree(nums.slice(maxIndex + 1, nums.length))

        return root
    }

    return getTree(nums)
};