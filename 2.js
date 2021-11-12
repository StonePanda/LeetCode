/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 用递归做
    function addNum(l1, l2, carry) {
        let l3 = null
        let sum = 0
        if (carry) {
            sum += 1
        }
        if (l1 == null && l2 == null) {
            if (carry) {
                l3 = new ListNode(1)
            }
        } else if (l1 == null && l2 != null) {
            sum += l2.val
            l3 = new ListNode(sum % 10)
            l3.next = addNum(null, l2.next, (sum / 10) | 0)
        } else if (l1 != null && l2 == null) {
            sum += l1.val
            l3 = new ListNode(sum % 10)
            l3.next = addNum(l1.next, null, (sum / 10) | 0)
        } else {
            sum += (l1.val + l2.val)
            l3 = new ListNode(sum % 10)
            l3.next = addNum(l1.next, l2.next, (sum / 10) | 0)
        }
        return l3
    }
    return addNum(l1, l2, 0)
};