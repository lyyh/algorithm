/**
 * @param {string} s
 * @return {boolean}
 */
var str = "{[]}"
var isValid = function(s) {
    var stack = []
    for(var i = 0;i < s.length;i++){
        var str = s[i]
        if(str === '(' || str === '[' || str === '{'){
            stack.push(str)
            continue
        }else if(stack.length && ((str === ')' && stack[stack.length - 1] === '(') || (str === ']' && stack[stack.length - 1] === '[') || (str === '}' && stack[stack.length - 1] === '{'))){
            stack.pop();
            continue
        }
        return false;
    }
    return stack.length === 0
};

console.log(isValid(str))