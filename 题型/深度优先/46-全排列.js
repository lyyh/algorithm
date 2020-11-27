var nums = [1,2,3]

var permute = function (nums) {
    var res = []
    var record = new Array(nums.length).fill(0);
    var dfs = function (record, path, nums) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (var i = 0; i < nums.length; i++) {
            if (record[i] !== 0) continue

            path.push(nums[i])
            record[i] = 1
            dfs(record, path, nums)
            path.pop();
            record[i] = 0;
        }
    }
    dfs(record, [], nums)
    return res;
};

console.log(permute(nums))