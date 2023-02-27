/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(0);   
    let now = head
    let c1 = list1
    let c2 = list2
    while (c1 || c2) {
        if (c2 === null || (c1 !== null && c1.val < c2.val)) {
            now.next = c1;
            c1 = c1.next
        } else {
            now.next = c2;
            c2 = c2.next;
        }
        now = now.next;
    }
    return head.next
};