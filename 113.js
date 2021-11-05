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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // 上一道题是简单，这一道题就是中等了，但是我觉得递归思路应该是一样的呀
    let result = []
    if (root == null) {
        return result
    }
    let path = [root.val]
    let tmpsum = root.val

    function getPath(node, targetSum) {
        if (node == null) {
            return
        }
        if (node.left == null && node.right == null && tmpsum == targetSum) {
            result.push(path.slice())
        }
        let nodechildren = [node.left, node.right]
        for (let i = 0; i < nodechildren.length; i++) {
            if (nodechildren[i] == null) {
                continue
            }
            tmpsum += nodechildren[i].val
            path.push(nodechildren[i].val)
            getPath(nodechildren[i], targetSum)
            tmpsum -= nodechildren[i].val
            path.pop()
        }
    }
    getPath(root, targetSum);
    // 老是写完忘记使用！哈哈
    return result
};