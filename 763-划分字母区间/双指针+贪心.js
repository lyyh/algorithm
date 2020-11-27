/**
 * @param {string} S
 * @return {number[]}
 * https://leetcode-cn.com/problems/partition-labels/
 * 先统计每个字母最后出现的位置，用HashMap记录，然后从头开始遍历字符串，每遇到一个字母，当前字母所在的区间最远会延伸到这个字母最后出现的位置即bound，继续遍历会不断刷新bound，如果遍历指针到达bound，表明该区间结束，开始计算下一个区间。官解中将本题的解题点看作是双指针 + 贪心，上文提到的bound也可以看做是一个超前的指针。
 */

var S = "ababcbacadefegdehijhklij"
var partitionLabels = function (S) {
    var result = []
    // 构建 map key值 value下标
    var map = {}
    for (var i = 0; i < S.length; i++) {
        map[S[i]] = i
    }

    var start = end = 0;
    for (var j = 0; j < S.length; j++) {
        end = Math.max(end, map[S[j]])
        // 找到片段
        if (end === j) {
            result.push(end - start + 1)
            start = end + 1
        }
    }
    console.log(1)
    return result
};

console.log(partitionLabels(S))