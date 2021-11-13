/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length == 0) {
        return true
    }
    if (word.toUpperCase() == word) {
        return true
    }
    if (word.toLowerCase() == word) {
        return true
    }
    let tmp = word.slice(1, word.length)
    if (word[0].toUpperCase() == word[0] && tmp.toLowerCase() == tmp) {
        return true
    }
    return false
        // js做这道题也太逆天了吧！！
};