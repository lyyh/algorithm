// 一维数组实现dp

var weights = [3, 3, 4, 6, 3];
var w = 10

function calc(weights, w) {
    // 下标：重量，是否可以到达
    var dp = new Array(w + 1)
    dp[0] = true
    if (weights[0] <= w) {
        dp[weights[0]] = true
    }

    for (var i = 1; i <= weights.length; i++) {
        for (var j = w - weights[i]; j >= 0; j--) {
            if (dp[j]) dp[j + weights[i]] = true
        }
    }

    for (var i = w; i >= 0; i++) {
        if (dp[i]) return i
    }
    return 0
}

console.log(calc(weights, w))