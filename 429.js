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