​
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words || !words.length) return [];
    let wordLen = words[0].length;
    let allWordsLen = wordLen * words.length;
    let ans = [],
        wordMap = {};
    for (let w of words) {
        wordMap[w] ? wordMap[w]++ : wordMap[w] = 1
    }
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {
        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
            let w = s.slice(j, j + wordLen);
            if (wm[w]) {
                wm[w]--
            } else {
                break;
            }
        }
        if (Object.values(wm).every(n => n === 0)) ans.push(i);
    }
    return ans;
};
// 上面是困难题别人的思路，是暴力解法

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words || !words.length) {
        return []
    }
    let wordLen = words[0].length
        // 长度相同，没看到！
    let allWordsLen = wordLen * words.length
    let ans = []
        // let wordMap=new Map()
    let wordMap = {}
        // 这次用一次Object
    for (let w of words) {
        // let of可以用于数组
        wordMap[w] ? wordMap[w]++ : wordMap[w] = 1
    }
    // 上面就是初始化吧！全部初始化为1
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {
        let wm = Object.assign({}, wordMap)
            // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
            // 把wordMap扩展复制给前面的target{},并返回给wm
        for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
            let w = s.slice(j, j + wordLen)
            if (wm[w]) {
                wm[w]--
            } else {
                break
            }
        }
        if (Object.values(wm).every(n => n === 0)) {
            ans.push(i)
        }
        // Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
        // 其实就跟那个map的map.values()是异曲同工之妙
    }
    return ans
};
// 暴力，还学了Object