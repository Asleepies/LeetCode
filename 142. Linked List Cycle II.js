/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const nodes = []
    let node = head
    while (!nodes.includes(node)) {
        nodes.push(node)
        node = node.next ? node.next : -1
    }
    return nodes.indexOf(node)
};