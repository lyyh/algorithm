/**
 * @param {string} s
 * @return {number}
 */
var nums = "abccccdd"
var longestPalindrome = function (s) {
    var hash = {}
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    var odd_mark = 0
    Object.keys(hash).forEach(key => {
        var value = hash[key]
        res += value;
        if (value % 2) { // 奇数
            res--
            odd_mark = 1
        }
    })
    if(odd_mark)res++
    return res;
};

console.log(longestPalindrome(nums))
