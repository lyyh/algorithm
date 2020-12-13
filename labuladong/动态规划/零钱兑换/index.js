// 动态规划

var coinChange = function (coins, amount) {
    var dp = Array.from({
        length: amount + 1
    }, () => amount + 1)
    dp[0] = 0
    for (var i = 0; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (i < coins[j]) continue
            dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount]
}

// 记忆递归
// var coinChange = function (coins, amount) {
//     coins = coins.sort((a,b)=> b - a)
//     if (amount === 0) return 0
//     var ans = Number.MAX_VALUE
//     var dfs = function (coins, amount, index, count) {
//         if (amount === 0) {
//             ans = Math.min(ans, count)
//             return`
//         }
//         if (index === coins.length) return
//         for (var k = Math.floor(amount / coins[index]); k >= 0 & k + count < ans; k--) {
//             dfs(coins, Math.floor(amount - k * coins[index]), index + 1, count + k, ans)
//         }
//     }
//     dfs(coins, amount, 0, 0)
//     return ans === Number.MAX_VALUE ? -1 : ans
// }