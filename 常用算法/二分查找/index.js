var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 递归版
var recursionBinarySearch = function (target, low, high, nums) {
    if (low > high) return -1; // 没有找到
    var mid = (low + high) >> 1
    var pivot = nums[mid]
    if (pivot === target) {
        return mid
    }
    if (pivot > target) {
        return recursionBinarySearch(target, low, mid - 1, nums)
    } else {
        return recursionBinarySearch(target, mid + 1, high, nums)
    }
}

// var binarySearch = function (target, nums) {
//     var min = 0;
//     var max = nums.length - 1
//     while (min <= max) {
//         var mid = min + (max - min >> 1)
//         if (target < nums[mid]) {
//             max = mid - 1;
//         } else if (target > nums[mid]) {
//             min = mid + 1
//         } else {
//             return mid
//         }

//     }
//     return -1
// }

var binarySearch = function (target, nums) {
    var min = 0;
    var max = nums.length - 1
    while (min <= max) {
        var mid = min + (max - min >> 1)
        if (nums[mid] < target) {
            min = mid + 1
        } else if (nums[mid] > target) {
            max = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

console.log(binarySearch(7, nums))