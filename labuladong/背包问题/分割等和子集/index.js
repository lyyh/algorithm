var canPartition = function (nums) {
    var sum = 0
    for (var n of nums) {
        sum += n
    }
    if (sum % 2 !== 0) return false
    sum = sum >> 1
    console.log(sum)
    var dp = Array.from({
        length: nums.length + 1
    }, () => {
        return new Array(sum + 1).fill(false)
    })

    for (var i = 0; i <= nums.length; i++) {
        dp[i][0] = true
    }

    for (var i = 1; i <= nums.length; i++) {
        for (var j = 1; j <= sum; j++) {
            if (j - nums[i - 1] < 0) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
            }
        }
    }
    return dp[nums.length][sum]
}

console.log(canPartition([1, 5, 11, 5]))