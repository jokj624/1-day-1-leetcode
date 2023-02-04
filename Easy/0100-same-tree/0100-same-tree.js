/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const recursive = (p, q) => {
    if (JSON.stringify(p) !== JSON.stringify(q)) return false;
    if (!p && !q) return true;
    
    if (p.left && q.left) recursive(p.left, q.left);
    if (p.right && q.right) recursive(p.right, q.right);

    return true
}
var isSameTree = function(p, q) {
    return recursive(p, q);
};