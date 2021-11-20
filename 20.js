/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 == 1) {
        return false
    }
    // 感觉用栈比较好做！
    // 用数组的push()和pop()就可以实现
    let bracksets = new Array()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            bracksets.push(s[i])
        } else {
            if (bracksets.length == 0) {
                return false
            }
            let tmp = bracksets.pop()
            if (s[i] == ')') {
                if (tmp != '(') {
                    return false
                }
            } else if (s[i] == '}') {
                if (tmp != '{') {
                    return false
                }
            } else {
                if (tmp != '[') {
                    return false
                }
            }

        }
    }
    if (bracksets.length != 0) {
        return false
    }
    return true
};