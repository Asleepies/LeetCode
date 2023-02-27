/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var last = head
    var current = last.next
    var next = current.next
    last.next = null
    while (current) {
        current.next = last;
        last = current
        current = next ? next : null
        next = current ? current.next : null
    }
    return last
};