/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nums = [1, 2, 3, 4]
// 空间复杂度O(n),时间复杂度O(n)
var productExceptSelf = function (nums) {
    var L = [];
    var R = [];
    var answers = []
    L[0] = 1
    for (var i = 1; i < nums.length; i++) {
        L[i] = L[i - 1] * nums[i - 1]
    }
    R[nums.length - 1] = 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1]
    }
    for (var i = 0; i < nums.length; i++) {
        answers[i] = L[i] * R[i]
    }
    return answers
};

// 空间复杂度为O(1)、时间复杂度O(n)
var productExceptSelf = function (nums) {
    var L = [];
    var R = [];
    var answers = []
    answers[0] = 1
    for (var i = 1; i < nums.length; i++) {
        answers[i] = answers[i - 1] * nums[i - 1]
    }
    R = 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        R *= nums[i + 1]
        answers[i] = R * answers[i]
    }
    return answers
};


console.log(productExceptSelf(nums))