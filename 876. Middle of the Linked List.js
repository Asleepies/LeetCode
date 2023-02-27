/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const nodes = []
    let node = head
    while (node) {
        nodes.push(node)
        node = node.next
    }
    return nodes[Math.floor(nodes.length/2)]
};