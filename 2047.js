var countValidWords = function(sentence) {
    const n = sentence.length;
    let l = 0,
        r = 0;
    let ret = 0;
    while (true) {
        while (l < n && sentence[l] === ' ') {
            l++;
        }
        if (l >= n) {
            break;
        }
        r = l + 1;
        while (r < n && sentence[r] != ' ') {
            r++;
        }
        if (isValid(sentence.slice(l, r))) { // 判断根据空格分解出来的 token 是否有效
            ret++;
        }
        l = r + 1;
    }
    return ret;
};

const isValid = (word) => {
    const n = word.length;
    let hasHyphens = false;
    for (let i = 0; i < n; i++) {
        if (word[i] >= '0' && word[i] <= '9') {
            return false;
        } else if (word[i] === '-') {
            if (hasHyphens === true || i === 0 || i === n - 1 || !isLetter(word[i - 1]) || !isLetter(word[i + 1])) {
                return false;
            }
            hasHyphens = true;
        } else if (word[i] === '!' || word[i] === '.' || word[i] === ',') {
            if (i !== n - 1) {
                return false;
            }
        }
    }
    return true;
}

const isLetter = (ch) => {
    if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        return true;
    }
    return false;
}

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/number-of-valid-words-in-a-sentence/solution/ju-zi-zhong-de-you-xiao-dan-ci-shu-by-le-hvow/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。