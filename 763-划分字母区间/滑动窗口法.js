
var S = "ababcbacadefegdehijhklij"
var partitionLabels = function (S) {
    var result = []
    var first = ''
    var last = ''
    for(var i = 0;i<S.length;i++){
        var char = S[i]
        first = S.indexOf(char)
        last = S.lastIndexOf(char)
        
        var j = i+1
        var nextChar = S[j]
        var jLast = S.lastIndexOf(char)
    }
};

console.log(partitionLabels(S))