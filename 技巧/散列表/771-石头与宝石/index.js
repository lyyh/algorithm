/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var J = "aA",
    S = "aAAbbbb"
var numJewelsInStones = function (J, S) {
    var hash = new Array(128).fill(0)
    var res = 0
    for (var i = 0; i < S.length; i++) {
        hash[S.charCodeAt(i)] += 1
    }
    for (var j = 0; j < J.length; j++) {
        res += hash[J.charCodeAt(j)]
    }
    return res
};
console.log(numJewelsInStones(J, S))