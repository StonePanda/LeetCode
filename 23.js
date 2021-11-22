/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 合并两个的时候是使用递归算法做的
    // 那么这个应该也可以，两个两个的合并
    // 但是总感觉两个两个的合并一定会超时
    // 所以还是一起搞
    let result = []
    let path
    while (lists.length > 0) {
        path = []
        let listslen = lists.length
        for (let i = 0; i < listslen; i++) {
            // 我去！这里竟然不是数组！
            // 我去！是链表合并！不是数组！
            // console.log(typeof lists[i])
            // 上面输出的是object
            if (lists[i] != null) {
                path.push(lists[i].val)
                lists[i] = lists[i].next
            } else {
                lists.splice(i, 1)
            }
        }
        // 自然升序排序
        result = result.concat(path)
    }
    if (result.length == 0) {
        return null
    }
    result.sort((a, b) => a - b)
    let resultNode = new ListNode(result[0])
    let tmp = resultNode
    for (let i = 1; i < result.length; i++) {
        tmp.next = new ListNode(result[i])
        tmp = tmp.next
    }
    return resultNode
};
// 这个方法竟然通过了！！