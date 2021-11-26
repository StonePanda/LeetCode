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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
//     // 感觉还是递归呢？

//     // 发现这道题没有说节点有没有重复

//     function getTree(root, val) {
//         if (root == null) {
//             return null
//         }
//         if (root.val == val) {
//             return root
//         }
//         if (root.left != null) {
//             return getTree(root.left, val)
//         }
//         if (root.right != null) {
//             return getTree(root.right, val)
//         }
//         return null
//     }
//     return getTree(root, val)
// };

// 上面这个递归在例子17/36的时候就报错了
// 其实是我自己不太知道什么时候返回，什么时候不返回

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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
//     // 感觉还是递归呢？

//     // 发现这道题没有说节点有没有重复

//     function getTree(root, val) {
//         if (root == null) {
//             return null
//         }
//         if (root.val == val) {
//             return root
//         }
//         if (root.left != null) {
//             if (getTree(root.left, val) != null) {
//                 return getTree(root.left, val)
//             }
//         }
//         if (root.right != null) {
//             if (getTree(root.right, val) != null) {
//                 return getTree(root.right, val)
//             }
//         }
//         return null
//     }
//     return getTree(root, val)
// };

// 然后第二遍这样写超时间限制了！
// 在测试例子30/36的时候超出时间限制了

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 感觉还是递归呢？

    // 发现这道题没有说节点有没有重复

    function getTree(root, val) {
        if (root == null) {
            return null
        }
        if (root.val == val) {
            return root
        }
        if (root.left != null) {
            let left = getTree(root.left, val)
            if (left != null) {
                return left
            }
        }
        if (root.right != null) {
            let right = getTree(root.right, val)
            if (right != null) {
                return right
            }
        }
        return null
    }
    return getTree(root, val)
};
// 然后我自己改成上面这个样子！其实也想到了上一个会超出时间！因为没必要跑两次递归！

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 感觉还是递归呢？

    // 发现这道题没有说节点有没有重复

    // 每日一题又弄到自己已经做过的题目了！
    // 所以再来一次吧！
    // 感觉层序遍历可以的
    // 然后做的时候突然发现，递归似乎更好用啊！
    // 因为层序遍历涉及的判断更多一点！
    // 但是之前好像是用的递归呢！
    // 那这次就层序遍历吧！
    let que = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            if (tmp.val == val) {
                return tmp
            }
            if (tmp.left != null) {
                que.push(tmp.left)
            }
            if (tmp.right != null) {
                que.push(tmp.right)
            }
        }
    }
    return null
};