/**
 * @param {number} n
 * @return {number}
 */
var n = 10
var getMoneyAmount = function (n) {
    if (n == 1) return 0;
    // 定义矩阵
    var dp = Array.from({
        length: n + 1
    }, () => {
        return new Array(n + 1).fill('')
    })

    // 定义基础矩阵
    for (var i = 0; i <= n; i++) {
        dp[i][i] = 0;
        if (i + 1 <= n) {
            dp[i][i + 1] = i
        }
    }

    // 列
    for (var i = 1; i <= n; i++) {
        // 行
        for (var j = i - 1; j >= 1; j--) {
            for (var k = j + 1; k <= i - 1; k++) {
                if (dp[j][i] === '') {
                    dp[j][i] = k + Math.max(dp[j][k - 1], dp[k + 1][i])
                } else {
                    dp[j][i] = Math.min(k + Math.max(dp[j][k - 1], dp[k + 1][i]), dp[j][i])
                }
            }
        }
    }
    //算除了两端的每一个分割点
    return dp[1][n]
};

console.log(getMoneyAmount(n))