/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 每到这个时候我就又想把它转换成数组问题去做！
    if (k == 1 || head == null || head.next == null) {
        return head
    }
    let result = 1
    let arrayO = []
    let path = []
    while (head != null) {
        if (result % k == 0) {
            path.push(head.val)
            path.reverse()
            arrayO = arrayO.concat(path)
            path = []
            head = head.next
        } else {
            path.push(head.val)
            head = head.next
        }
        result++
    }
    arrayO = arrayO.concat(path)
        // console.log(arrayO)
        // 上面这里的输出是完全正确的
    let tmp = new ListNode(arrayO[0])
    let resultNode = tmp
    for (let i = 1; i < arrayO.length; i++) {
        tmp.next = new ListNode(arrayO[i])
        tmp = tmp.next
    }
    return resultNode
};
// 永远把它变成数组去做是不是有点违规啊

// 是有点违规！所以还是好好看题解！
// 明天再做吧！