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
 * @return {number[]}
 */
var findMode = function(root) {
    // 这一道题看出来了是二叉搜索树！那么我就要把它比编程有序数组
    let result = []
    if (root == null) {
        return result
    }
    let inorder = new Map()
        // key是节点的值，vallie是节点出现的次数
    function getInorder(root) {
        if (root == null) {
            return
        }
        getInorder(root.left)
        if (inorder.has(root.val)) {
            let tmp = inorder.get(root.val)
            inorder.set(root.val, tmp + 1)
        } else {
            inorder.set(root.val, 1)
                // console.log(inorder)
        }
        getInorder(root.right)
    }
    getInorder(root)
        // 又忘记执行了！
        // inorder.sort(function(a,b){
        //     return b.value-a.value
        // })
        // map对象并不能直接使用sort函数
        // 将map降序排序
    let inorderArray = Array.from(inorder)
    inorderArray.sort((a, b) => b[1] - a[1])
        // let maxtime=inorder.values().next().value
        // 获取map的第一个值
        // map的迭代
        // for(let [key,value] of inorder)
        // {
        //     if(value<maxtime)
        //     {
        //         return
        //     }
        //     result.push(key)
        // }
        // console.log(inorderArray)
    let tmp = inorderArray[0][1]
    for (let i = 0; i < inorderArray.length; i++) {
        if (inorderArray[i][1] < tmp) {
            break
        }
        result.push(inorderArray[i][0])
    }
    return result
};

// 这一道题好好地学了学map对象！！！