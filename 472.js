/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    // 先把words按照单词的长度进行排序
    words.sort((a, b) => a.length - b.length)
        // 按照长度的自然升序排序
    let minlen = words[0].length * 2
    let res = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < minlen) {
            continue
        } else {
            let startLen = []
                // 要不要用KMP算法解决？
            for (let j = 0; j < i; j++) {
                let tmp = KMP(words[i], words[j])
                if (tmp != -1) {
                    startLen.push([tmp, words[j].length])
                }
            }
            console.log(startLen)
            if (startLen.length != 0 && isAll(words[i].length, startLen)) {
                res.push(words[i])
            }
        }
    }
    return res
};

const KMP = (haystack, needle) => {
    let pi = new Array(needle.length).fill(0)
    for (let i = 1, j = 0; i < needle.length; i++) {
        while (j > 0 && needle[i] != needle[j]) {
            j = pi[j - 1]
        }
        if (needle[i] == needle[j]) {
            j++
        }
        pi[i] = j
    }
    for (let i = 0, j = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1]
        }
        if (haystack[i] == needle[j]) {
            j++
        }
        if (j == needle.length) {
            return i - needle.length + 1
        }
    }
    return -1
}

const isAll = (strLen, startLen) => {
    startLen.sort((a, b) => a[0] - b[0])
        // 按起始位置自然升序排序
    let start = 0
    for (let i = 0; i < startLen.length; i++) {
        // 从零开始
        if (i == 0 && startLen[i][0] != 0) {
            return false
        } else if (i == 0) {
            start += (startLen[i][1] - 1)
        }
        if (startLen[i][0] != start) {
            return false
        } else {
            start += startLen[i][1]
        }
    }
    if (start != strLen - 1) {
        return false
    }
    return true
};
// 总之这个想法不对

// 下面是别人写的js答案
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set();
    let res = [];
    let getWord = function(word, start) {
        for (let str = '', len = word.length - 1; start <= len; ++start) {
            str += word[start]
            if (set.has(str) && (start === len || getWord(word, start + 1))) {
                return true;
            }
        }
        return false;
    }
    words.sort((a, b) => a.length - b.length);
    set.add(words[0]);
    for (let i = 1, len = words.length; i < len; ++i) {
        if (getWord(words[i], 0)) {
            res.push(words[i])
        } else {
            set.add(words[i])
        }
    }
    return res;
};