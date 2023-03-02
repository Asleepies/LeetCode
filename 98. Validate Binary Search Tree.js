/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null ) { return true }
    const checker = (node, min, max) => {
        if (node === null ) { return true }
        if (node.val <= min || node.val >= max) {
            return false
        }
        return checker(node.left, min, node.val) && checker(node.right, node.val, max)
    } 
    return checker(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};