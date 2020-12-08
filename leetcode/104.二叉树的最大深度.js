/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
// 标签：DFS
// 找出终止条件：当前节点为空
// 找出返回值：节点为空时说明高度为 0，所以返回 0；节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值
// 某层的执行过程：在返回值部分基本已经描述清楚
// 时间复杂度：O(n)O(n)
// var maxDepth = function (root) {
//     if (!root) return 0

//     var left = maxDepth(root.left)
//     var right = maxDepth(root.right)

//     return Math.max(left, right) + 1
// };

// 广度优先&队列
// var maxDepth = function (root) {
//     if (!root) return root
//     var queue = [root]
//     var ans = 0
//     while (queue.length) {
//         var size = queue.length
//         for (var i = 0; i < size; i++) {
//             var node = queue.shift();
//             if (node.left) queue.push(node.left)
//             if (node.right) queue.push(node.right)
//         }
//         ans++;
//     }
//     return ans
// }

var maxDepth = function (root) {
    if (!root) return root
    var depthStack = [1];
    var nodeStack = [root];
    var ans = 0

    while (nodeStack.length) {
        var curDepth = depthStack.pop();
        var curNode = nodeStack.pop();

        if (curNode.left) {
            nodeStack.push(curNode.left)
            depthStack.push(curDepth + 1)
        }

        if (curNode.right) {
            nodeStack.push(curNode.right)
            depthStack.push(curDepth + 1)
        }

        ans = Math.max(ans,curDepth)
    }
    return ans
}
