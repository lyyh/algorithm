/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [1, 2, 3, 1]


var level_1 = (function () {
    var rob = function (nums) {
        var len = nums.length
        if (!len) return 0
        if (len === 1) return nums[0]
        var S = []
        S[0] = nums[0]
        S[1] = Math.max(S[0], nums[1])
        for (var i = 2; i < nums.length; i++) {
            S[i] = Math.max(S[i - 1], S[i - 2] + nums[i]);
        }
        return S[len - 1]
    };
    console.log(rob(nums))
})


var level_2 = (function () {
    var rob = function (nums) {
        var len = nums.length
        if (!len) return 0
        if (len === 1) return nums[0]
        var first = nums[0]
        var second = Math.max(first, nums[1])
        for (var i = 2; i < nums.length; i++) {
            var tmp = second;
            second = Math.max(second, first + nums[i]);
            first = tmp;
        }
        return second
    };
    console.log(rob(nums))
})

level_2()
// level_1()