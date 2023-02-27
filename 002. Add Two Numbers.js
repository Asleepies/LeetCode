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
    let head = l1
    let remainder = 0
    let total = head
    while ((l1 && l2) || remainder ) {
        const v1 = l1 ? l1.val : 0
        const v2 = l2 ? l2.val : 0
        let sum = v1 + v2 + remainder
        if (sum > 9) {
            remainder = 1
            sum -= 10
        } else { 
            remainder = 0 
        }
        total.val = sum
        if (l1) { l1 = l1.next; }
        if (l2) { l2 = l2.next; }
        total.next = l1 ? l1 : l2
        if (remainder && !total.next) {
            total.next = new ListNode(0)
        }
        total = total.next
    }
    return head
}
