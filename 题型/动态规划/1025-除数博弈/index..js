/**
 * @param {number} N
 * @return {boolean}
 * F(N)要想赢，存在一个i，可以让F(N-i)输
 */
var N = 3
var level_1 = (function name(params) {
    var divisorGame = function (N) {
        var F = new Array(N + 1).fill(false)
        // F[1] = false
        for (var i = 2; i <= N; i++) {
            for (var j = 1; j < i; j++) {
                if (i % j === 0 && !F[i - j]) {
                    F[i] = true;
                    break;
                }
            }
        }
        return F[N]
    };
    console.log(divisorGame)
})
level_1();

var level_2 = (function name(params) {
    var divisorGame = function (N) {
        return N % 2 === 0
    }
    console.log(divisorGame)
})

level_2();

