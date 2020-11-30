var maxProfit = function (prices) {
    var min = Number.POSITIVE_INFINITY;
    var max = 0;
    var dp = new Array(prices.length).fill(0)
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        dp[i] = Math.max(dp[i - 1] || 0, prices[i] - min)
        max = Math.max(dp[i], max)
    }
    return max
};