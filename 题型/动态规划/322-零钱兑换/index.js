/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coins = [1]
var amount = 1

var level_1 = (function () {
    var coinChange = function (coins, amount) {
        var Yuan = 0 // 从0元开始递增
        var F = [0]; // 0个硬币的情况下，0面额是存在的
        var minNum = 0; // 0面额硬币数量为0，临时变量存放各种面额的最少银币数
        // 边界0面额情况
        if (amount === Yuan) return minNum;

        while (Yuan <= amount) {
            // 可能存在硬币和是1的情况，所以要加1表示无穷大
            minNum = amount + 1
            for (var i = 0; i < coins.length; i++) {
                if (Yuan - coins[i] < 0) { // 面额为负，可以作为正无穷
                    continue;
                }

                if (Yuan === coins[i]) {
                    minNum = 1
                    break;
                }

                var preYuan = Yuan - coins[i]
                if (F[preYuan] === -1) continue;

                // 取最小
                minNum = Math.min(minNum, F[preYuan] + 1)
            }
            if (minNum === amount + 1) {
                F[Yuan] = -1
            } else {
                F[Yuan] = minNum
            }
            Yuan++
        }
        return F[amount];
    };
    console.log(coinChange(coins, amount))
})

level_1()