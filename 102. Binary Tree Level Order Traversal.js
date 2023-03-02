/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let row = []
    let collection = []
    let children = []
    let queue = []
    let current = root
    
    while (current) {
        row.push(current.val)
        if ( current.left ) { children.push(current.left) }
        if ( current.right ) {  children.push(current.right) }
        if (!queue.length) { 
            collection.push(row); 
            queue = children;
            row = [];
            children = [];
        }
        current = queue.shift()
    }
    return collection
};