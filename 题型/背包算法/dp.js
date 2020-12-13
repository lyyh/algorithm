var weight = [2, 2, 4, 6, 3];
var maxW = 10

function calc(weight, maxW) {
    var dp = Array.from({
        length: weight.length
    }, () => new Array(maxW + 1).fill(false))

    dp[0][0] = true
    if (weight[0] < maxW) {
        dp[0][weight[0]] = true
    }
    for (var i = 1; i < weight.length; i++) {
        for (var j = 0; j <= maxW; j++) { // 不把第i个物品放入背包
            if (dp[i - 1][j]) dp[i][j] = dp[i - 1][j]
        }
        for (var j = 0; j <= maxW - weight[i]; j++) { // 
            if (dp[i - 1][j]) dp[i][j + weight[i]] = true
        }
    }
    for (var i = maxW; i >= 0; i--) {
        if (dp[weight.length - 1][i]) return i
    }
}

console.log(calc(weight, maxW))