/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // children是一个列表
    let que = []
    let result = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let path = []
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            path.push(tmp.val)
            que = que.concat(tmp.children)
                // 这里用concat合并
        }
        result.push(path)
    }
    return result
};

// 这个也比较简单，然后我用了一个js的concat函数

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // children是一个列表
    let que = []
    let result = []
    if (root != null) {
        que.push(root)
    }
    while (que.length != 0) {
        let path = []
        let quelen = que.length
        for (let i = 0; i < quelen; i++) {
            let tmp = que.shift()
            path.push(tmp.val)
            for (let j = 0; j < tmp.children.length; j++) {
                if (tmp.children[j] != null) {
                    que.push(tmp.children[j])
                }
            }
            // que=que.concat(tmp.children)
            // 这里用concat合并，但是看了教程之后，发现孩子还是要判断一下null比较好
        }
        result.push(path)
    }
    return result
};