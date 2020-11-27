/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var N = 2, trust = [[1,2]]
var findJudge = function (N, trust) {
    var arrow = new Array(N+1).fill(0)
    console.log('111',arrow)
    for (var i = 0; i < trust.length; i++) {
        var relative = trust[i]
        console.log('re',relative)
        arrow[relative[0]]--
        arrow[relative[1]]++
    }

    console.log(arrow)
    for(var j = 0;j <= arrow.length;j++){
        if(arrow[j] === N-1)return i
    }
    return -1
};
console.log(findJudge(N,trust))