/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    // 有思路没？
    num = num.toString()
    const nLen = num.length
    const maxEnd = (nLen - 1) >> 1
        // 因为至少要三个数，那么firstEnd至多到((nLen-1)>>1)-1
        // 那么secondEnd也是至多到((nLen-1)>>1)-1
        // 怎么样应对第二个例子呢
        // 毫无思路啊！
        // 看了看官方题解，发现也没有什么巧劲，即使枚举出所有可能的前两个数，因为前两个数定了，后面所有的数字都定了
        // 第一个数firstStart=0,firstEnd未知，第二个数secondStart=firstEnd+1,secondEnd未知
        // 所以就是枚举firstEnd和SecondEnd，然后这里如果有一个组合是可以的，就不用再循环了，就返回ture
        // 如果一直没有返回true，那就是false
    for (let i = 1; i <= maxEnd; i++) {
        for (let j = i + 1; j <= maxEnd + 1; j++) {
            if ((num[0] == '0' && i != 1) || (num[i + 1] == '0' && j != i + 2)) {
                // 开头是0的数字，违规了
                continue
            }
            if (isTure(num, i, j)) {
                return true
            }
        }
    }
    return false
};

const isTure = (num, i, j) => {
    // 直接parseInt的话会有溢出的情况
    // 因为parseInt实际上就是number类型哦
    // Number.MAX_SAFE_INTEGER值为2^53-1,是16位数，但是这个题最大的数是17位！
    // 所以说呢，还是用字符串加法吧
    first = num.substring(0, i).split('').reverse().join('')
    second = num.substring(i, j).split('').reverse().join('')
        // 数字反过来
        // 字符串加法，好累！
        // 把较短的后面全部补充为0
    const firstLen = first.length
    const secondLen = second.length
        // 只能储存一时的数据，并不会随着数组的长度而变化
    if (firstLen < secondLen) {
        first = first + '0'.repeat(secondLen - firstLen)
    } else if (firstLen > secondLen) {
        second = second + '0'.repeat(firstLen - secondLen)
    }
    // 现在两个是等长的了
    let fi
    let si
    let tmp
    let res = ''
    let carry = 0
    for (let i = 0; i < first.length; i++) {
        fi = parseInt(first[i])
        si = parseInt(second[i])
        tmp = fi + si + carry
        if (tmp >= 10) {
            carry = 1
            res += (tmp % 10).toString()
        } else {
            carry = 0
            res += tmp.toString()
        }
    }
    if (carry == 1) {
        res += '1'
    }
    res = res.split('').reverse().join('')
    if (num.substring(j, num.length).indexOf(res) == 0) {
        // 有戏，接着循环
        if (res.length + j + 1 == num.length) {
            return true
        } else {
            return isTure(num, j, res.length + j)
        }
    }
    return false
};
// 写的好乱啊！
// 就是思绪也乱！写的也乱！另外就是写的时候就不自信！
// 但是其实看了官方题解之后发现都是这么写的哇！


// 下面是官方题解里的代码
var isAdditiveNumber = function(num) {
    const n = num.length;
    for (let secondStart = 1; secondStart < n - 1; ++secondStart) {
        if (num[0] === '0' && secondStart !== 1) {
            break;
        }
        for (let secondEnd = secondStart; secondEnd < n - 1; ++secondEnd) {
            if (num[secondStart] === '0' && secondStart !== secondEnd) {
                break;
            }
            if (valid(secondStart, secondEnd, num)) {
                return true;
            }
        }
    }
    return false;
};

const valid = (secondStart, secondEnd, num) => {
    const n = num.length;
    let firstStart = 0,
        firstEnd = secondStart - 1;
    while (secondEnd <= n - 1) {
        const third = stringAdd(num, firstStart, firstEnd, secondStart, secondEnd);
        const thirdStart = secondEnd + 1;
        const thirdEnd = secondEnd + third.length;
        if (thirdEnd >= n || num.slice(thirdStart, thirdEnd + 1) !== third) {
            break;
        }
        if (thirdEnd === n - 1) {
            return true;
        }
        firstStart = secondStart;
        firstEnd = secondEnd;
        secondStart = thirdStart;
        secondEnd = thirdEnd;
    }
    return false;
}

const stringAdd = (s, firstStart, firstEnd, secondStart, secondEnd) => {
    const third = [];
    let carry = 0,
        cur = 0;
    while (firstEnd >= firstStart || secondEnd >= secondStart || carry !== 0) {
        cur = carry;
        if (firstEnd >= firstStart) {
            cur += s[firstEnd].charCodeAt() - '0'.charCodeAt();
            --firstEnd;
        }
        if (secondEnd >= secondStart) {
            cur += s[secondEnd].charCodeAt() - '0'.charCodeAt();
            --secondEnd;
        }
        carry = Math.floor(cur / 10);
        cur %= 10;
        third.push(String.fromCharCode(cur + '0'.charCodeAt()));
    }
    third.reverse();
    return third.join('');
}