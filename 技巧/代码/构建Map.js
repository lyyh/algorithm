// 构建 value/index 的Map
// value index
var s = [1,2,3,4,5,4,3,2,4,1]
var map = {}
for(var i = 0;i<s.length;i++){
    map[s[i]] = i
}
console.log(map)