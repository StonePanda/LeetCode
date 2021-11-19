/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 是不是就是把倒数第n+1个的next指向导数第n-1个就行了
    // 先计算链表中的节点数
    let sz = 1
    let tmp = head
    let tmp2 = head
    let tmp3 = head
    while (head.next != null) {
        head = head.next
        sz++
    }
    // 如果n==1，那么是没有倒数第0个的，那就直接让hou=null就可以了
    if (sz == n) {
        return tmp.next
    }
    // 得到sz了
    // 那么sz的导数第n个，整数就是sz-n（i从0开始）
    let hou
    if (n == 1) {
        hou = null
    } else {
        for (let i = 0; i <= sz - (n - 1); i++) {
            if (i == sz - (n - 1)) {
                hou = tmp
            }
            tmp = tmp.next
        }
    }
    for (let i = 0; i <= sz - (n + 1); i++) {
        if (i == sz - (n + 1)) {
            tmp2.next = hou
        }
        tmp2 = tmp2.next
    }
    return tmp3
};