/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }
    var root = new TreeNode(preorder[0]);
    for (var i = 0; i < preorder.length; i++) {
        if (preorder[0] === inorder[i]) {
            root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
            root.right = buildTree(preorder.slice(i + 1, preorder.length), inorder.slice(i + 1, inorder.length))
            break;
        }
    }
    return root
};
// @lc code=end