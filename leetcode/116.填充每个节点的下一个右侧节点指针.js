/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connectTowNode = function (leftNode, rightNode) {
    if (!rightNode) return
    leftNode.next = rightNode
    connectTowNode(leftNode.left, leftNode.right)
    connectTowNode(rightNode.left, rightNode.right)
    connectTowNode(leftNode.right,rightNode.left)
}
var connect = function (root) {
    if (!root || !root.right) return root
    connectTowNode(root.left, root.right)
    return root
};
// @lc code=end