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
var sortedArrayToBST = function(nums) {
    // 终于来到构造二叉树这一part了
    // 其实相当于不断地插入，但同时又要保证左右高度平衡
    // 肯定是一个递归函数
    function getRoot(nums) {
        if (nums.length == 0) {
            return null
        }
        // js的整除，用|0,底层逻辑可能是在小数变二进制
        // 与0相或的时候，把小数部分直接舍去了
        // 所以可以向下取整
        let delimitedIndex = (nums.length / 2) | 0
        let val = nums[delimitedIndex]
        let root = new TreeNode(val)
        root.right = getRoot(nums.slice(delimitedIndex + 1, nums.length))
        root.left = getRoot(nums.slice(0, delimitedIndex))
        return root
    }
    return getRoot(nums)
};
// 这一道题主要是要记住js的向下取整