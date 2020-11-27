/**
 * @param {number[]} nums
 * @return {number[]}
 */

var m = [1, 2, 3, 4, 5, 6, 7]
var level_1 = (function () {
    var largestDivisibleSubset = function (nums) {
        var n = nums.length
        if (!n) return [];

        nums = nums.sort(function (a, b) {
            return a - b;
        })

        var maxIdx = 0;
        var res = new Array(n).fill([]);
        console.log('res',res)
        for (var i = 0; i < n; i++) {
            var max = i;
            var maxLength = 0;
            for (var j = 0; j < i; j++) {
                if(nums[i] % nums[j] === 0 && maxLength < res[j].length){
                    max = j;
                    maxLength = res[j].length
                }
            }

            res[i] = [];
            res[i] = res[i].concat(res[i],res[max],nums[i])
            if(res[maxIdx].length < res[i].length){
                maxIdx = i;
            }
        }
        return res[maxIdx]
    };
    console.log(largestDivisibleSubset(m))
})

level_1()