/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length < 2 || goal.length < 2) {
        return false
    }
    if (s.length != goal.length) {
        return false
    }

    let dif = []
    let samec = new Map()
    for (let i = 0; i < s.length; i++) {
        samec.set(s[i], (samec.get(s[i]) || 0) + 1)
        if (dif.length > 2) {
            return false
        }
        if (s[i] != goal[i]) {
            dif.push([s[i], goal[i]])
        }
    }
    // 如果字符串完全一样，而且里面有两个相同的字符，那么应该返回true
    if (dif.length == 0) {
        for (let [key, value] of samec) {
            if (value >= 2) {
                return true
            }
        }
    }
    if (dif.length != 2) {
        return false
    }
    if (dif[0][0] != dif[1][1] || dif[0][1] != dif[1][0]) {
        return false
    }
    return true
};