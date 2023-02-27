/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let vals = []
    if (root) {
        vals.push(root.val)
        if (root.children) {
            root.children.map(c => {
                const po = preorder(c)
                vals.push(...po)
            })
        }

    }
    return vals
};