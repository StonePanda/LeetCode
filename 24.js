/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  真想对链表骂脏话！
var swapPairs = function(head) {
    // 必须对实际的节点进行交换

    // 艹！链表！
    function returnNode(head) {
        if (head == null) {
            return null
        }
        if (head.next == null) {
            return head
        }
        let tmp1 = head
        let tmp2 = head.next
        head = tmp2
        head.next = tmp1
        head.next.next = returnNode(head.next.next)
        return head
    }
    return returnNode(head)
        // 艹！不会！
};
// 链表！我就是不会啊！疯啦！


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  真想对链表骂脏话！
var swapPairs = function(head) {
    // 必须对实际的节点进行交换

    // 艹！链表！

    // 不要随便把链表赋值给这个给那个！！
    if (head == null || head.next == null) {
        return head
    }
    const newHead = head.next
    head.next = swapPairs(head.next.next)
    newHead.next = head
    return newHead
};