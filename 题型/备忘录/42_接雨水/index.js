var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// 暴力解法,时间复杂度O(n^2)空间复杂度O(1)
var level_1 = (function () {
    var trap = function (height) {
        var len = height.length
        var ans = 0
        for (var i = 0; i < len; i++) {
            var l_max = 0,
                r_max = 0;
            for (var j = i; j >= 0; j--) {
                l_max = Math.max(l_max, height[j])
            }
            for (var j = i; j < len; j++) {
                r_max = Math.max(r_max, height[j])
            }
            ans += Math.min(l_max, r_max) - height[i]
        }
        return ans
    }
    console.log(trap(height))
})

// 备忘录解法，时间复杂度O(n),空间复杂度O(n)
var level_2 = (function () {
    var trap = function (height) {
        var len = height.length
        var ans = 0
        var l_max = new Array(len).fill(0)
        var r_max = new Array(len).fill(0)
        l_max[0] = height[0]
        r_max[len - 1] = height[len - 1]
    
        for (var i = 1; i < len; i++) {
            l_max[i] = Math.max(l_max[i - 1], height[i])
        }
        for (var i = len - 2; i >= 0; i--) {
            r_max[i] = Math.max(r_max[i + 1], height[i])
        }
        for (var j = 1; j < len - 1; j++) {
            ans += Math.min(r_max[j], l_max[j]) - height[j]
        }
        return ans
    };
    console.log(trap(height))
})