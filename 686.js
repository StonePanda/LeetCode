// 总之就是又开始面向测试的编程了！
// 下面是自己写的，在49/57的时候就报错了
// "aaaaaaaaaaaaaaaaaaaaaab"
// "ba"
// 应该输出2，但是我输出的-1

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// var repeatedStringMatch = function(a, b) {
//     // 也就是根据长度判断，然后再看看是不是子串?
//     let aLen = a.length
//     let bLen = b.length
//     if (aLen > bLen) {
//         if (a.indexOf(b) == -1) {
//             return -1
//         }
//         return 1
//     }
//     let times = Math.ceil(bLen / aLen) + 1
//     let atimes = a.repeat(times)
//     let start = atimes.indexOf(b)
//         // console.log(times)
//     if (start == -1) {
//         return -1
//     }
//     if (start == 0) {
//         return times - 1
//     }
//     return times
// };

// 不能总是依赖搜索引擎！有一些自己也要记！
// 这个连向上取整向下取整的函数我怎么都要搜索呢！

const repeatedStringMatch = (a, b) => {
    const an = a.length,
        bn = b.length;
    const index = strStr(a, b);
    if (index === -1) {
        return -1;
    }
    if (an - index >= bn) {
        return 1;
    }
    return Math.floor((bn + index - an - 1) / an) + 2;
}

const strStr = (haystack, needle) => {
    const n = haystack.length,
        m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] === needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i - j < n; i++) { // b 开始匹配的位置是否超过第一个叠加的 a
        while (j > 0 && haystack[i % n] !== needle[j]) { // haystack 是循环叠加的字符串，所以取 i % n
            j = pi[j - 1];
        }
        if (haystack[i % n] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
}

// 上面就是官方题解

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    // 还是利用KMP算法来匹配字符串
    const aLen = a.length
    const bLen = b.length
    const index = KMP(a, b)
    if (index == -1) {
        return -1
    }
    if (aLen - index > bLen) {
        return 1
    }
    return Math.floor((bLen + index - aLen - 1) / aLen) + 2
};

const KMP = (haystack, needle) => {
    const n = haystack.length
    const m = needle.length
    if (m == 0) {
        return 0
    }
    const pi = new Array(m).fill(0)
        // 创建对应pi表
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] != needle[j]) {
            j = pi[j - 1]
        }
        if (needle[i] == needle[j]) {
            j++
        }
        pi[i] = j
    }
    for (let i = 0, j = 0; i - j < n; i++) {
        // 关于判断条件中的i-j<n，b开始匹配的位置是否超过第一个a
        while (j > 0 && haystack[i % n] != needle[j]) {
            j = pi[j - 1]
        }
        if (haystack[i % n] == needle[j]) {
            j++
        }
        if (j == m) {
            // 表示全部都匹配啦！
            return i - m + 1
        }
    }
    return -1
}

// 下面是自己看着写的！