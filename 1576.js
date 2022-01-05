var modifyString = function(s) {
    const n = s.length;
    const arr = [...s];
    for (let i = 0; i < n; ++i) {
        if (arr[i] === '?') {
            for (let j = 0; j < 3; ++j) {
                if ((i > 0 && arr[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) || (i < n - 1 && arr[i + 1] === String.fromCharCode('a'.charCodeAt() + j))) {
                    continue;
                }
                arr[i] = String.fromCharCode('a'.charCodeAt() + j);
                break;
            }
        }
    }
    return arr.join('');
};

// 上面是官方题解
// js里字符串没办法替换指定位置的字符，所以可以转成数组来处理
// 然后再把数组join一下就变成了字符串

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    // 有问号，就替换成字母，和前面后面都不重复的字母即可
    // 手动写一个字母表
    // 如果有问号，那就
    const sAry = s.split('');
    for (let i = 0; i < sAry.length; i++) {
        if (sAry[i] == '?') {
            if (i == 0) {
                sAry[i] = chooseLetter('', sAry[i + 1])
            } else if (i == sAry.length - 1) {
                sAry[i] = chooseLetter(sAry[i - 1], '')
            } else {
                sAry[i] = chooseLetter(sAry[i - 1], sAry[i + 1])
            }
        }
    }
    return sAry.join('')
};

const chooseLetter = (front, back) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != front && letters[i] != back) {
            return letters[i]
        }
    }
}

// 上面是自己写的！但是还可以再改一下！

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    // 再自己写一次！
    // 官方题解里面有很多小巧思！
    // 但是自己写的时候总是用不上！
    const n = s.length
    const arr = [...s]
        // 这个也可以用在copy数组里面
    for (let i = 0; i < n; i++) {
        if (arr[i] == '?') {
            for (let j = 0; j < 3; j++) {
                if ((i > 0 && arr[i - 1] == String.fromCharCode('a'.charCodeAt() + j)) || (i < n - 1 && arr[i + 1] == String.fromCharCode('a'.charCodeAt() + j))) {
                    // 包括两端，跟左右任何一个重复了,因为中间是或，i==0的时候i<n-1
                    continue
                }
                arr[i] = String.fromCharCode('a'.charCodeAt() + j)
                break
            }
        }
    }
    return arr.join('')
};
// 上面是根据官方题解写的！