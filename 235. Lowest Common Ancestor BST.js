
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if ( root.val > p.val && root.val > q.val ) {
        return lowestCommonAncestor(root.left, p, q)
    } else
    if (root.val < p.val && root.val < q.val ) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
}
