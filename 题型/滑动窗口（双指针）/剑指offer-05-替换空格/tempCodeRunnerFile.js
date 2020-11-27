ar replaceSpace = function (s) {
        var arr = s.split('')
        var p1 = s.length - 1
        var p0 = s.length - 1;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === ' ') {
                arr = arr.concat([' ', ' '])
                p1 += 2
          