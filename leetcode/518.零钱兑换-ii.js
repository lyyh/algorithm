/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var dfs = function (path, coins, curAmount, amount, res) {
    if (curAmount > amount) return;
    if (curAmount === amount) {
        res.push([...path])
        return
    }
    for (var i = 0; i < coins.length; i++) {
        if (coins[i] < path[path.length - 1]) continue
        path.push(coins[i])
        dfs(path, coins, curAmount + coins[i], amount, res)
        path.pop()
    }
}
var change = function (amount, coins) {
    coins = coins.sort((a, b) => a - b)
    var res = []
    var memo = {}
    dfs([], coins, 0, amount, res, memo)
    return res.length
};
// @lc code=end