/**
 * @param {number[]} nums
 * @return {number}
 * 状态转移方程式：F[i] = max(F[i-1]*N,N)
 */
var nums = [-2, 3, -4]

var level_1 = (function (params) {
    var swap = function (a, b) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var maxProduct = function (nums) {
        var imax = 1;
        var imin = 1;
        var max = undefined;
        for (var i = 0; i < nums.length; i++) {
            console.log('nums[i]',nums[i])
            if (nums[i] < 0) {
                swap(imax, imin)
            }
            imax = Math.max(imax * nums[i], nums[i])
            imin = Math.min(imin * nums[i], nums[i])
            max = max === undefined ? imax : Math.max(max, imax)
        }
        return max
    };
    console.log(maxProduct(nums))
})
level_1();