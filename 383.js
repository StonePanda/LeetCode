/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 其实就是判断按顺序排列后的字母
    // abcd看看分别有多少个，然后ransomNote里面的应该都小于等于后面magazine里面的
    let ranlen = ransomNote.length
    let maglen = magazine.length
    if (ranlen > maglen) {
        return false
    }
    let ranmap = new Map()
    for (let i = 0; i < ranlen; i++) {
        ranmap.set(ransomNote[i], (ranmap.get(ransomNote[i]) || 0) + 1)
    }
    let magmap = new Map()
    for (let i = 0; i < maglen; i++) {
        magmap.set(magazine[i], (magmap.get(magazine[i]) || 0) + 1)
    }
    for (let [key, val] of ranmap) {
        if (magmap.has(key) == false) {
            return false
        }
        if (val > magmap.get(key)) {
            return false
        }
    }
    return true
};